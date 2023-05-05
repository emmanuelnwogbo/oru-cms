uploadcsv.post('/upload/csv', upload.array('files[]'), (req, res) => {
    const files = req.files;
    const promises = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const params = {
            Bucket: process.env.S3BN,
            Key: file.originalname,
            Body: file.buffer
        };
        const uploadPromise = s3.upload(params).promise();
        promises.push(uploadPromise);
    }

    Promise.all(promises)
        .then(results => {
            console.log(results);
            res.send('Files uploaded to S3!');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Error uploading files to S3');
        });
});

/*const customFields = {};
                        

                        const newItemFromCsv = new CsvData({

                        });*/