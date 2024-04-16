const express = require("express");
const cors = require("cors"); // Importa el paquete CORS
const app = express();
const servicio = require("./service/fotoServicio");
const corsOptions = {
  origin: 'https://mi-primera-app-beta.vercel.app',
  optionsSuccessStatus: 200,
};

app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones a JSON

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://mi-primera-app-beta.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const corsOptions = {
  origin: "https://mi-primera-9yhp6wr85-azarhels-projects.vercel.app/",
  optionsSuccessStatus: 200,
};

// Aquí van tus endpoints o rutas
app.get("/", (req, res) => res.send("Express on Vercel"));

<<<<<<< HEAD
app.post("/api/v1/contacto", cors(corsOptions), async (req, res) => {
=======
app.post("/api/v1/contacto",cors(corsOptions), async (req, res) => {
>>>>>>> 6047c6310d7154014a4151f3327d08aac726f972
  let respuesta = await servicio.registrarSolicitud(req.body);
  res.status(respuesta.status).json({ mensaje: respuesta.mensaje });
});

app.get("/api/v1/crearTabla", async (req, res) => {
  let respuesta = await servicio.crearTabla();
  res.status(respuesta.status).json({ mensaje: respuesta.mensaje });
});

app.listen(3000, () => console.log("Server ready on port 3000."));
