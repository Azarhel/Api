const { sql } =  require("@vercel/postgres");

// funcion para crear la tabla en la base de datos sqlite
const crearTabla = async () => {
  try {
    const result =
      await sql`CREATE TABLE solicitudes ( id int primary key autoincrement, nombre_client varchar(255), correo varchar(255), mensaje varchar(1000));`;
    return result;
  } catch (error) {
    return error;
  }
};

const registrarSolicitud = async (datos) => {


  const sql = `INSERT INTO solicitudes (nombre_cliente, correo, mensaje) VALUES ( '${datos.nombre}' , '${datos.correo}' , '${datos.mensaje}')`;

 
};

module.exports = {
  registrarSolicitud,
  crearTabla
};
