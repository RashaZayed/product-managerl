const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost/productmanager",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Established connection to the database"))
.catch((err)=> consile.log("there is an error when connecting to the database", err))