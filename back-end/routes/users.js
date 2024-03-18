const express = require('express')
const router = express.Router()

const {createProfile,signin,getAllUsers,deleteUser,getUserId } = require('../controllers/users')

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')

router.get('/users',isAdminAuthenticated, getAllUsers)
router.delete('/users/:id',isAdminAuthenticated, deleteUser)

router.post('/signup',createProfile)
router.post('/signin',signin)

router.get('/users/payload/:token',isUserAuthenticated, getUserId)

module.exports = router