const express = require('express')
const router = express.Router()

const {signup,signin,getAllUsers,updateUser} = require('../controllers/users')

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')

router.post('/signup',signup)
router.post('/signin',signin)
//admin
router.get('/getAll',isAdminAuthenticated, getAllUsers)
//user

router.put('/update/:id',isUserAuthenticated, updateUser)

module.exports = router