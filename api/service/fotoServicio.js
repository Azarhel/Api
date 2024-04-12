require("dotenv").config();
const { createPool } = require("@vercel/postgres");

// funcion para crear la tabla en la base de datos sqlite
const crearTabla = async () => {
  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    const result =
      await pool.sql`CREATE TABLE solicitudes ( id SERIAL PRIMARY KEY, nombre_cliente varchar(255), correo varchar(255), mensaje varchar(1000));`;
    pool.end();
    return { status: 200, mensaje: result };
  } catch (error) {
    pool.end();
    return { status: 500, mensaje: error };
  }
};

const registrarSolicitud = async (datos) => {
  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });
  try {
    if (!datos.nombre || !datos.correo || !datos.mensaje) throw new Error('Nombre, correo y mensaje son requeridos!');
    const result =
      await pool.sql`INSERT INTO solicitudes (nombre_cliente, correo, mensaje) VALUES ( ${datos.nombre} , ${datos.correo} , ${datos.mensaje})`;
    pool.end();
    return { status: 200, mensaje: result };
  } catch (error) {
    pool.end();
    return { status: 500, mensaje: error };
  }
};

module.exports = {
  registrarSolicitud,
  crearTabla,
};
