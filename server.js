const express = require('express') ;
const app = express();

const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
require("./server/config/mongoose.config");
require("./server/routes/productManager.routes")(app);


app.listen(8000 , ()=> {console.log("The server is listening to port 8000")})