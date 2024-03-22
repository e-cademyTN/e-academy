const {Material} = require("../model")
const {User} = require("../model")

module.exports = {
  //admin/user
  getMaterialsUser: async (req, res) => {
    try {
        
      const result = await Material.findAll({include : {
        model : User,
        where: { id: req.params.id },
        attributes: [],
      }});
      res.status(200).json(result);
    } catch (err) {
        console.log (err)
      res.status(404).send(err);
    }
  },

  addMaterialUser : async (req, res) => {
  try {
     const {userId,materialId} = req.body
     const materials = await Material.findByPk(materialId)
    
      material.addUser(userId);
    res.status(200).send("User Added");
  } catch (err) {
      console.log (err) 
    res.status(404).send(err);
  }
},
delMaterialUser : async (req, res) => {
  try {
     const {userId,materialId} = req.body
     const delmaterial = await Material.findByPk(materialId)
     const user = await User.findByPk(userId);
    
     await user.removeMaterial(delmaterial)
     
    res.status(200).send(delmaterial);
  } catch (err) {
      console.log (err) 
    res.status(404).send(err);
  }
},
};