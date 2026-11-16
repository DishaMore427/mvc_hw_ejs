const express = require("express");
const {
  displayEmployees,
  appEmp,
  updateEmp,
  deleteEmp,
  searchEmp,
} = require("../Controller/empController");
const router = express.Router();
router.get("/", displayEmployees);
router.post("/addEmp", appEmp);
router.patch("/updateEmp/:id", updateEmp);
router.delete("/delete/:id", deleteEmp);
router.get("/search/:dept", searchEmp);
module.exports = router;
