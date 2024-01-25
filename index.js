// Se importa express y se inicia en la variable app
// Se indica que express se inicie en el puerto 3000 y se muestra por consola el mensaje de que está escuchando

var express = require("express");
var app = express();
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("El servidor está escuchando en el puerto " + PORT);
});

const LIBROS = require("./libros");

//Con esto se indica que si se accede a la ruta raíz ‘/’ se ejecuta la función => indicada
app.get("/", (req,res)=>{
    res.send("hola mundo!");
});

app.get("/api/libros", (req,res)=>{
    let libros_propiedades = LIBROS.map(libro => {
        return {
            id: libro.id,
            titulo: libro.titulo,
            autor: libro.autor
        }
    });
    
    
    res.json({
        success:true,
        message: "Listado de libros",
        data: {
            count: libros_propiedades.length,
            libros: libros_propiedades
        }
    });
});

app.get("/api/libros/:id", (req,res)=>{
    let id = req.params.id;
    let filtro = LIBROS.filter(libro => libro.id == id);
    if(filtro.length>0){
        res.json({
            success:true,
            message: "Libro encontrado con id: "+ id,
            data: filtro[0]
        });
    } else {
        res.status(404).json({
            success: false,
            error_code: 4321,
            message: "No se encuentra ningún libro con el id: " + id
        });
    }
});

app.use(express.static("public"));
