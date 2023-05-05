import express from 'express';
import multer from 'multer';
const AWS = require('aws-sdk');

const router = express.Router();
const uploadcsv = router;

import User from '../../models/user';
import CsvData from '../../models/csvdata';

import csvtojson from '../../utilities/csvtojson';
import hasQuotedCsvFormat from '../../utilities/hasQuotedCsvFormat';
import parseCsvWithQuotes from '../../utilities/parseCsvWithQuotes';
import arrayToJson from '../../utilities/arrayToJson';

const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 1024 * 1024 * 7
    }
});

const s3 = new AWS.S3({
    accessKeyId: process.env.ACCESSKEYS3,
    secretAccessKey: process.env.SECRETACCESKEYS3
});

uploadcsv.post('/upload/csv', upload.array('files[]'), async (req, res) => {
    const files = req.files;
    const promises = [];
    const csvDataItems = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.buffer) {
            console.error('File buffer not available');
            continue;
        }

        const uploadPromise = new Promise(async (resolve, reject) => {
            const fileContent = file.buffer.toString('utf-8');

            const csvHasDoubleQuotes = hasQuotedCsvFormat(fileContent);

            if (csvHasDoubleQuotes) {
                const csvFileResult = await parseCsvWithQuotes(fileContent);
                const csvFileResultJsonArray = await arrayToJson(csvFileResult);

                for (let n = 0; n < csvFileResultJsonArray.length; n++) {
                    const customFields = csvFileResultJsonArray[n];
                    const csvData = new CsvData({
                        customFields,
                        fileName: file.originalname,
                        createdBy: '64522bdb9812406401ad57d8'//development update after the ui is complete
                    });

                    try {
                        const savedCsvData = await csvData.save();
                        csvDataItems.push(savedCsvData);
                      } catch (error) {
                        console.error(error);
                        throw new Error('Failed to save CSV data');
                      }
                }

            } else {
                const csvFileResult = await csvtojson(fileContent);
                
                if (csvFileResult.length) {
                    for (let n = 0; n < csvFileResult.length; n++) {
                        const customFields = csvFileResult[n];
                        const csvData = new CsvData({
                            customFields,
                            fileName: file.originalname,
                            createdBy: '64522bdb9812406401ad57d8'//development update after the ui is complete
                        });

                        try {
                            const savedCsvData = await csvData.save();
                            csvDataItems.push(savedCsvData);
                          } catch (error) {
                            console.error(error);
                            throw new Error('Failed to save CSV data');
                          }
                    }

                    const params = {
                        Bucket: process.env.S3BN,
                        Key: file.originalname,
                        Body: file.buffer
                    };

                    const s3UploadPromise = s3.upload(params).promise();
                    s3UploadPromise
                        .then((result) => {
                            console.log(`Uploaded file to S3: ${result.Location}`);
                            resolve(result.Location);
                        })
                        .catch((error) => {
                            console.error(`Error uploading file to S3: ${error}`);
                            reject(error);
                        });
                }
            }
        });

        promises.push(uploadPromise);
    }

    Promise.all(promises)
        .then(results => {
            console.log(csvDataItems);
            console.log(results);
            res.send('Files uploaded to S3!');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error uploading files to S3');
        });
});

export default uploadcsv;