const express = require('express');
const router = express.Router();

const {getMaterialsUser,addMaterialUser,delMaterialUser} = require('../controllers/stud_material.js')



router.get("/getmaterials/:id",getMaterialsUser)
router.post("/addmaterialuser",addMaterialUser)
router.delete("/delmaterialuser",delMaterialUser)
module.exports = router    