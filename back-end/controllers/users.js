const bcrypt = require("bcrypt")
const {User} = require("../model")
const jwt = require("jsonwebtoken");
require('dotenv').config()
module.exports = {
    signup: async (req, res) => {
        let {email,password,firstName,imageUrl,lastName}=req.body
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
                imageUrl:imageUrl,
                lastName:lastName,
                email: email,
                password: hashedpass,
                role:'student'
            });
            res.status(201).send(user)
        } catch (error) {
            console.error(error);
            res.status(500).send(error); 
        }
    },
    signin: async (req, res) => {
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
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const payload =JSON.parse(atob(base64)) 
            res.status(200).json({ payload, token, message: 'succeeded' });
        } catch (error) {
            console.error(error);
            res.status(500).send(error); 
        }
    },
    getAllUsers: async (req, res) => {
       
    },
    updateUser:async(req,res)=>{

    }
    

}

