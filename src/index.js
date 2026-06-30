//1. Si instalé express, cors y morgan,
//ahora tengo que traerlos al archivo donde voy a armar mi servidor.
import express from "express";
import cors from "cors";
import morgan from "morgan"

//2. Creo la aplicación de Express
const app = express(); //Creo una instancia de Express y la guardo en la variable app. Crea la aplicación/servidor

//3. Configuración de middlewares (filtros o pasos previos antes de responder):
app.use(cors()); //quiero que mi servidor use esta función antes de llegar a los endpoints
app.use(morgan("dev")); //morgan sirve para que la terminal muestre cada request que llega al servidor.
app.use(express.json()) //permite que el servidor entienda datos en formato JSON

//4. Creo los endpoints
//4. A. Endpoint Productos
app.get("/api/productos", (req,res) => { //app.get(...) → define un endpoint de tipo GET / "/api/productos" → es la ruta que alguien va a consultar
    const productos = [
        "Churros",
        "Café con leche",
        "Tostado de jamón y queso",
        "Lemon Pie",
    ];

    res.json(productos); //→ envío la lista en formato JSON
});

//4. B. Endpoint Promo
app.get("/api/promo", (req,res) => {
    res.json({
        promo: "La promo del día es Café con leche + 2 churros = $8.000"
    });
});

//4. C. Endpoint Horarios
app.get("/api/horarios", (req,res) => {
    res.json({
        lunesAViernes: "8:00 a 20:00",
        sabados: "9:00 a 13:00",
        domingosYFeriados: "Cerrado"
    });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
})