const express = require('express')
const router = express.Router()
const multer = require('multer');


const {signup,signin,getAllUsers,updateUser,getOne,logout} = require('../controllers/users')

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated');
const { signOutList, verifySession } = require ('../middlewares/blacklist')

router.post('/signup',signup)
router.post('/signin',signin)
router.get('/logout',signOutList,logout)
//admin
router.get('/getAll',isAdminAuthenticated, verifySession,getAllUsers)
//user
router.put('/update/:id',isUserAuthenticated, updateUser)
router.get("/getOne/:id",isUserAuthenticated,getOne)

module.exports = router