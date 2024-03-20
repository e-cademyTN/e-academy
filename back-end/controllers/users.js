const bcrypt = require("bcrypt")
const {User} = require("../model")
const jwt = require("jsonwebtoken");
require('dotenv').config()

   const signup= async (req, res) => {
        // getting the data
        const {email,firstName,lastName,password,role}=req.body
        try {
            //checking if the email is already in use
            const checkemail=await User.findOne({where:{email:email}})

            if (checkemail) {
                return res.status(400).json({ error: "existing account  " });
            }
            //hashing the password
            let hashedpass=await bcrypt.hash(password,10)
            //creating the new user
            const user = await User.create({
                firstName:firstName,
                imageUrl:req.files[0].originalname,
                lastName:lastName,
                email: email,
                password: hashedpass,
                role:role
            });
            res.status(201).send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send(error); 
        }
    }
   const signin= async (req, res) => {
        try {
            // cheking if the email and password are not a falsy value
            const {email,password}=req.body
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
                    role: user.role
                },
                process.env.jwt_Secret,
                {
                    expiresIn: "1d",
                }
            );
            let student={
                id:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
                imageUrl:user.imageUrl
            }
            res.status(200).json({ student, token, message: 'succeeded' });
        } catch (error) {
            console.error(error);
            res.status(500).send(error); 
        }
    }
   const getAllUsers= async (req, res) => {
       
    }
    const updateUser=async(req,res)=>{

    }
    

    module.exports = {signin,signup,getAllUsers,updateUser}

