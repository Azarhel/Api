const express = require("express");
const cors = require('cors'); // Importa el paquete CORS
const app = express();
const registrarSolicitud = require('./service/fotoServicio')

app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones a JSON
app.use(cors()); // Activa el middleware CORS en tu aplicación Express

// Aquí van tus endpoints o rutas
app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/api/v1/contacto", async (req, res) => {
    let respuesta = await registrarSolicitud(req.body);
    res.status(respuesta.status).json({ mensaje: respuesta.mensaje });
});

app.listen(3000, () => console.log("Server ready on port 3000."));
