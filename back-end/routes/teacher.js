const express = require('express');
const router = express.Router();

const {getAllTeacher,getOne,createTeacher,updateTeacher,deleteTeacher} = require('../controllers/teacher.js')


const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')

router.get("/getAll",)
router.post("/add",)
router.put("/update/:id",)
router.delete("/delete/:id",)

module.exports = router    