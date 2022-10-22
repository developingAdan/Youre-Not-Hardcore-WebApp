const multer = require("multer");
const path = require("path");


// Multer is what helps us facilitate that image upload so we can successfully get it up to Cloudinary 

// ***** I added the .toLowerCase() String method so the extension name would automatically be converted to lowercase, so now it works with our conditional (if statement) underneath. 
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    console.log(`ext is -- ${ext}`)
    // here we are checking if the file selected (ext) does not end in a valid image thing
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});


