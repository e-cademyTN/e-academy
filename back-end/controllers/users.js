const bcrypt = require("bcrypt");
const { User } = require("../model");
const jwt = require("jsonwebtoken");

const { upload } = require("../helper/helperFunction.js");


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
  
    const imageUrl = await upload(imageBuffer);
    
    const user = await User.create({
      firstName: firstName,
      imageUrl: imageUrl,
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
        const users = await User.findAll();
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
    console.log(user)
      res.status(200).send(user)
    }catch(err){
res.status(500).send(err)
    }

}
const updateUser = async (req, res) => {
  try {
      const { id } = req.params; 
      const { firstName, lastName, imageUrl, currentPassword, newPassword } = req.body; 
      console.log("firstName :",firstName)
      console.log('imageUrl from req.body :', imageUrl)
      let user = await User.findByPk(id);
      console.log("user :",user)
      console.log("user.imageUrl :",user.imageUrl)

      if (!user) {
          return res.status(404).json({ error: "User not found." });
      }
      if (firstName) {
          user.firstName = firstName;
      }
      if (lastName) {
          user.lastName = lastName;
      }
     console.log("imageBuffer",req.files[0].buffer)
      
        const imageBuffer = req.files[0].buffer
        const url = await upload(imageBuffer)
        console.log("secureUrl :",url)
        user.imageUrl = url
        console.log(user.imageUrl)
      
      
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

module.exports = { signin, signup, getAllUsers, updateUser ,getOne};
