import express from 'express';
import multer from 'multer';
const AWS = require('aws-sdk');

const router = express.Router();
const uploadcsv = router;

import User from '../../models/user';
import CsvData from '../../models/csvdata';

import csvtojson from '../../utilities/csvtojson';

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

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.buffer) {
            console.error('File buffer not available');
            continue;
          }
          
          //const parser = csv();
          const uploadPromise = new Promise(async (resolve, reject) => {
            const fileContent = file.buffer.toString('utf-8');
            const csvFileResult = await csvtojson(fileContent);

            //console.log(csvFileResult, 'hello file result');
          });
    }
});

export default uploadcsv;