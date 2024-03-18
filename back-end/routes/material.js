const express = require('express');
const router = express.Router();
const {} = require('../controllers/material.js')

const isAuthenticated = require('../middlewares/isUserAuthenticated.js')

router.get("/getAll",isAuthenticated,)
router.post("/add",isAuthenticated,)
router.put("/update/:id",isAuthenticated,)
router.delete("/delete/:id",isAuthenticated,)

module.exports = router    