import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import dotenv from "dotenv"


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto",
        });

        // file has been uploaded successful
        console.log("File is uploaded on cloudinary");
        return response;
    } catch (error) {
        // remove the locally saved temporary file as the upload operation got failed
        fs.unlinkSync(localFilePath);
        console.log("Cloudinary upload error: ", error);
    }
}

export {uploadOnCloudinary};