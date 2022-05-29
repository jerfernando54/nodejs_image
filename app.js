const express = require("express");
const path = require("path");
const config = require("./config");


const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

app.get("/", async function(req, res){
    res.send("Hola mundo")
})

app.listen(config.port, (err) => {
    if(err) {
        console.log(`No se pudo inicializar el servido ${err.message}`)
    } else {
        console.log(`Servidor iniciado en el puerto ${config.host}:${config.port}`)
    }
})