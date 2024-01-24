// Se importa express y se inicia en la variable app
// Se indica que express se inicie en el puerto 3000 y se muestra por consola el mensaje de que está escuchando

var express = require("express");
var app = express();
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("El servidor está escuchando en el puerto " + PORT);
});

//Con esto se indica que si se accede a la ruta raíz ‘/’ se ejecuta la función => indicada
app.get("/", (req,res)=>{
    res.send("hola mundo!");
});

app.get("/api/clientes", (req,res)=>{
    res.send("api de clientes con metodo get");
});

app.get("/api/clientes/:id", (req,res)=>{
    let id = req.params.id;
    res.send("Buscar cliente con la id=" + id);
});

app.use(express.static("public"));
