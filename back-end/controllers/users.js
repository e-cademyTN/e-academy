const bcrypt = require("bcrypt");
const { User } = require("../model");
const jwt = require("jsonwebtoken");
const { Readable } = require("stream");

const cloudinary = require("../utils/cloudinary");

const signup = async (req, res) => {
  // getting the data
  const { email, firstName, lastName, password, role } = req.body;

  try {
    //checking if the email is already in use
    const checkemail = await User.findOne({ where: { email: email } });

    if (checkemail) {
      return res.status(400).json({ error: "existing account  " });
    }
    //hashing the password
    let hashedpass = await bcrypt.hash(password, 10);
    //creating the new user
    const imageBuffer = req.files[0].buffer;
    console.log("imageBuffer :", imageBuffer)
    const imageStream = Readable.from(imageBuffer);

    const cloudinaryResult = await new Promise((resolve, reject) => {
        const upload_stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
  
        imageStream.pipe(upload_stream);
      });
 
    console.log("log",cloudinaryResult.secure_url);
    
    const user = await User.create({
      firstName: firstName,
      imageUrl: cloudinaryResult.secure_url,
      lastName: lastName,
      email: email,
      password: hashedpass,
      role: role,
    });

    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
const signin = async (req, res) => {
  try {
    // cheking if the email and password are not a falsy value
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ error: "Email or Password not found." });
    }
    //cheking if the email exist in the database
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "User not found." });
    }
    //cheking if the password is valid
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Password is incorrect." });
    }

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role,
      },
      process.env.jwt_Secret,
      {
        expiresIn: "1d",
      }
    );
    let student = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
    };
    res.status(200).json({ student, token, message: "succeeded" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
const getAllUsers = async (req, res) => {};
const updateUser = async (req, res) => {};

module.exports = { signin, signup, getAllUsers, updateUser };
