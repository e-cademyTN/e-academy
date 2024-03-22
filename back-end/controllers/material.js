const { Material } = require("../model")
module.exports = {
  //admin/user
  getAllMaterial: async (req, res) => {
    try {
      const result = await Material.findAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(404).send(err);
    }
  },
  ///user
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Material.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  //admin
  createMaterial: async (req, res) => {
    try {
      const { name, description, price, date, link } = req.body;
      const result = await Material.create({ name, description, price, date, link });
      res.status(201).json(result);
    } catch (err) {
      res.status(404).send(err);
    }

  },
  //admin
  updateMaterial: async (req, res) => {
    try {
      const { id } = req.params
      const result = await Material.update(
        req.body,
        { where: { id: id } }
      );

      res.status(202).json(req.body);
    } catch (err) {
      res.status(404).send(err);
    }

  }, //admin
  deleteMaterial: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Material.destroy({ where: { id: id } });
      res.status(204).json(result);
    } catch (err) {
      res.status(404).send(err);
    }
  }
};