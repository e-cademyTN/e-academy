const cloudinary = require("cloudinary").v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: "dh2qloyy9" ,
    api_key: "956614893562936",
    api_secret: "Fp6ch0r3R0s1I1gVfKR-gajxvKo",
})


module.exports = cloudinary;   