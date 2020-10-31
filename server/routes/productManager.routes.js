const productMangercontroller = require("../controllers/productManager.controller");

module.exports = app => {
    app.post("/api/new" , productMangercontroller.createOne)
}