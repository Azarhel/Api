const express = require("express");
const cors = require('cors'); // Importa el paquete CORS
const app = express();

app.use(express.json()); // Middleware para parsear el cuerpo de las peticiones a JSON
app.use(cors()); // Activa el middleware CORS en tu aplicación Express

// Aquí van tus endpoints o rutas
app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/api/v1/contacto", (req, res) => {
    const respuesta = {
        nombre: "Ejemplo Nombre",
        email: "ejemplo@correo.com",
        mensaje: "Este es un mensaje de ejemplo."
    };
    res.status(200).json(respuesta);
});

app.listen(3000, () => console.log("Server ready on port 3000."));
