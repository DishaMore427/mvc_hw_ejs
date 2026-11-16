const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, resp) => {
  resp.render("home");
});
app.get("/add", (req, resp) => {
  const data = 10 + 20;
  resp.render("add", { data });
});
app.get("/product", (req, resp) => {
  const data = [
    { id: 1, name: "TV", price: 90000 },
    { id: 2, name: "Mobile", price: 90000 },
    { id: 3, name: "Mouse", price: 90000 },
    { id: 4, name: "Laptop", price: 90000 },
    { id: 5, name: "Keyboard", price: 90000 },
  ];
  resp.render("product", { data });
});
app.listen(4000, (req, resp) => {
  console.log("Running..");
});
