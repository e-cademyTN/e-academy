const { Teacher } = require("../model")
module.exports = {
  //admin/user
  getAllTeacher: async (req, res) => {
    try {
      const result = await Teacher.findAll();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  ///user
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Teacher.findByPk(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  //admin
  createTeacher: async (req, res) => {
    try {
      const { name } = req.body;
      const result = await Teacher.create({ name });
      res.status(201).json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  //admin
  updateTeacher: async (req, res) => {
    try {
      const { id } = req.params
      const result = await Teacher.update(
        req.body,
        { where: { id: id } }
      );

      res.status(202).json(req.body);
    } catch (error) {
      res.status(404).send(error);
    }

  },
  //admin
  deleteTeacher: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Teacher.destroy({ where: { id: id } });
      res.status(204).json(result);
    } catch (error) {
      res.status(404).send(error);
    }
  }
};

