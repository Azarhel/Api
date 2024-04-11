const sqlite3 = require("sqlite3").verbose();

// funcion para crear la tabla en la base de datos sqlite
const crearTabla = (db) => {
  const sqlCreateTable = `
    CREATE TABLE IF NOT EXISTS solicitudes (
      id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
      nombre_cliente TEXT,
      correo TEXT,
      mensaje TEXT
    )
  `;

  // Ejecuta la sentencia SQL para crear la tabla
  db.run(sqlCreateTable, function (err) {
    if (err) {
      return console.error("Error al crear la tabla:", err.message);
    }
    console.log('Tabla "solicitudes" creada correctamente');
  });
};

const registrarSolicitud = async (datos) => {
  let db = new sqlite3.Database("./database.sqlite");

  crearTabla(db);

  const sql = `INSERT INTO solicitudes (nombre_cliente, correo, mensaje) VALUES ( '${datos.nombre}' , '${datos.correo}' , '${datos.mensaje}')`;

  return new Promise((resolve, reject) => {
    db?.get(sql, function (err, row) {
      if (err) {
        reject({ status: 400, mensaje: "Error al crear solicitud" });
      } else {
        resolve({ status: 200, mensaje: "Registro existoso!" });
      }
    });
    db.close();
  });
};

module.exports = registrarSolicitud;
