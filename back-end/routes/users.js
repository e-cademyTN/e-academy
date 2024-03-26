const express = require('express')
const router = express.Router()



const {verifyUser,signup,signin,getAllUsers,updateUser,getOne} = require('../controllers/users')

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated');

router.get('/confirm/:activationcode', verifyUser);
router.post('/signup',signup)
router.post('/signin',signin)
//admin
router.get('/getAll',isAdminAuthenticated,getAllUsers)
//user
router.put('/update/:id',isUserAuthenticated, updateUser)
router.get("/getOne/:id",isUserAuthenticated,getOne)

module.exports = router