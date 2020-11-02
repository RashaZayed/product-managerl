const productMangercontroller = require("../controllers/productManager.controller");

module.exports = app => {
    app.post("/api/new" , productMangercontroller.createOne)
    app.get("/api/products", productMangercontroller.getAll)
    app.get("/api/products/:id",productMangercontroller.getOne )
    app.put("/api/products/:id", productMangercontroller.updateOne)
    app.delete("/api/prducts/:id",productMangercontroller.deleteOne)
}