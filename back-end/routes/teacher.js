const express = require('express');
const router = express.Router();

const {getAllTeacher,getOne,createTeacher,updateTeacher,deleteTeacher} = require('../controllers/teacher.js')


const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')

router.get("/getAll",getAllTeacher)
router.get("/getOne/:id",getOne)
router.post("/add",createTeacher)
router.put("/update/:id",updateTeacher)
router.delete("/delete/:id",deleteTeacher)

module.exports = router    