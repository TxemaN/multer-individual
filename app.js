const express = require("express")
const cors = require('cors')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
require('dotenv').config();

//SERVIDOR

const app=express();


//PUERTO
const port = 3000



//RUTAS
app.use("/", require("./routes/routeFoto"));

//ESCUCHA SERVIDOR
app.listen(port, ()=>{
    console.log(`Servidor a la escucha del puerto ${port}`)

});
