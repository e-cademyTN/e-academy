const bcrypt = require("bcrypt");
const { User } = require("../model");
const jwt = require("jsonwebtoken");

const { upload } = require("../helper/helperFunction.js");
const{sendConfirmation} =require('../utils/sendEmail.js')


const signup = async (req, res) => {
  const { email, firstName, lastName, password, role } = req.body;
  // This will log a random string of 8 characters
  function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
    return randomString;
  }
  
  const randomString = getRandomString(8);
  
  
  // getting the data
  try {
    //checking if the email is already in use
    const checkemail = await User.findOne({ where: { email: email } });
console.log(checkemail);
    if (checkemail) {
      return res.status(400).json({ error: "existing account  " });
    }
    //hashing the password
    let hashedpass = await bcrypt.hash(password, 10);
    //creating the new user
    const imageBuffer = req.files[0].buffer;
    console.log("imageBuffer :", imageBuffer)
    const imageUrl = await upload(imageBuffer);
    const user = await User.create({
      firstName: firstName,
      imageUrl: imageUrl,
      lastName: lastName,
      email: email,
      password: hashedpass,
      role: role,
      isactive:'false',
      activationcode:randomString
    });

    res.status(201).send(user);
    sendConfirmation(firstName,email,randomString,password)
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
    if(user.isactive==false){
      return res.status(401).json({ error: "avtivate your account?" });
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
    let logeduser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
      role:user.role
    };
    res.status(200).json({ logeduser, token, message: "succeeded" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({where:{ role: "student" }});
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
const getOne = async (req,res)=>{
  try{
    const {id} = req.params
    const user = await User.findOne({ where: { id: id } })
      res.status(200).send(user)
    }catch(err){
res.status(500).send(err)
    }

}
const updateUser = async (req, res) => {
  try {
      const { id } = req.params; 
      const { firstName, lastName, imageUrl, currentPassword, newPassword } = req.body; 
      let user = await User.findByPk(id);

      if (!user) {
          return res.status(404).json({ error: "User not found." });
      }
      if (firstName) {
          user.firstName = firstName;
      }
      if (lastName) {
          user.lastName = lastName;
      }
        const imageBuffer = req.files[0].buffer
        const url = await upload(imageBuffer)
        user.imageUrl = url
      if (currentPassword && newPassword) {
          const passwordMatch = await bcrypt.compare(currentPassword, user.password);
          if (!passwordMatch) {
              return res.status(401).json({ error: "Current password is incorrect." });
          }
          const hashedNewPassword = await bcrypt.hash(newPassword, 10);
          user.password = hashedNewPassword;
      }
      await user.save();
      res.status(200).json({ message: "User updated successfully.", user });
  } catch (error) {
      console.error(error);
      res.status(500).send(error);
  }
};
const verifyUser=async(req,res)=>{
  console.log(req.params)
  try{
    const user = await User.findOne({ where: { activationcode: req.params.activationcode } })
    if(!user){
      res.send({message:"wrong code" })
    }
     user.isactive='true'
     await user.save()
      res.status(200).send("user activated")
    }catch(err){
   

res.status(500).send(err)
    }
}

module.exports = { verifyUser,signin, signup, getAllUsers, updateUser ,getOne};
