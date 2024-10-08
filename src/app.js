
/** CLASE 10 - ARQUITECTURA DEL SERVIDOR: DISEÑO **/

//Temas de hoy

/* 
    1)Puntos de partida al desarrollar un servidor
    2) Patrones de diseño
    3) Singleton para nuestra conexión a MongoDB
    4)Comunicación entre el front y el backend

*/

// levantar un servidor

import express from "express";
import productosRouter from "./routes/productos.router.js";
const app = express();
const PUERTO = 8080;
import "./database.js";

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("./src/public"));



//Rutas
app.use("/productos", productosRouter);


//Listen

app.listen(PUERTO, () => {
    console.log(`Listening on port http://localhost:${PUERTO}`);

});
