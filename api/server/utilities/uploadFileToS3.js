const uploadFileToS3 = async (file) => {
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

export default uploadFileToS3;