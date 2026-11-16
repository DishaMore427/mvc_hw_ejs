const empModel = require("../Model/empModel");

const displayEmployees = async (req, resp) => {
  try {
    const result = await empModel.find();
    resp.json(result);
  } catch (error) {
    console.log(error);
  }
};

const appEmp = async (req, resp) => {
  try {
    const { name, salary, dept } = req.body;
    const result = await empModel.create({ name, salary, dept });
    resp.json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateEmp = async (req, resp) => {
  try {
    const result = await empModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    resp.json(result);
  } catch (error) {
    console.log(error);
  }
};
const deleteEmp = async (req, resp) => {
  try {
    const result = await empModel.findByIdAndDelete(req.params.id);
    resp.json(result);
  } catch (error) {
    console.log(error);
  }
};

const searchEmp = async (req, resp) => {
  try {
    const dept = req.params.dept
    const result = await empModel.find({ dept: dept });
    resp.json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { displayEmployees, appEmp, updateEmp, deleteEmp, searchEmp };
