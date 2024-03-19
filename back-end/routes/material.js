const express = require('express');
const router = express.Router();
const {getAllMaterial,getOne,createMaterial,updateMaterial,deleteMaterial} = require('../controllers/material.js')

const isAdminAuthenticated = require('../middlewares/isAdminAuthenticated')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')

router.get("/getAll",)
router.post("/add",)
router.put("/update/:id",)
router.delete("/delete/:id",)

module.exports = router    