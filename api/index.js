const express = require("express");
const cors = require("cors"); // Importa el paquete CORS
const app = express();
const servicio = require("./service/fotoServicio");

app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones a JSON
app.use(cors()); // Activa el middleware CORS en tu aplicación Express

const corsOptions = {
  origin: "https://mi-primera-9yhp6wr85-azarhels-projects.vercel.app/",
  optionsSuccessStatus: 200,
};

// Aquí van tus endpoints o rutas
app.get("/", (req, res) => res.send("Express on Vercel"));

app.post("/api/v1/contacto", cors(corsOptions), async (req, res) => {
  let respuesta = await servicio.registrarSolicitud(req.body);
  res.status(respuesta.status).json({ mensaje: respuesta.mensaje });
});

app.get("/api/v1/crearTabla", async (req, res) => {
  let respuesta = await servicio.crearTabla();
  res.status(200).json(respuesta);
});

app.listen(3000, () => console.log("Server ready on port 3000."));
