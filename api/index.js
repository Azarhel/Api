const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("Express on Vercel"));
// Nuevo endpoint /api/v1/contacto
app.get("/api/v1/contacto", (req, res) => {
    // Creando un objeto JSON para enviar como respuesta
    const respuesta = {
        nombre: "Ejemplo Nombre",
        email: "ejemplo@correo.com",
        mensaje: "Este es un mensaje de ejemplo."
    };
       // Enviando el objeto JSON como respuesta
       res.status(200).json(respuesta);
    });
app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
