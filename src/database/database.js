import { Pool } from "pg";
import config from "./../config.js"; // Asegúrate de usar la extensión .js si estás usando ES Modules

// Crear un pool de conexiones usando la configuración
const pool = new Pool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port || 5432, // Default to 5432 if not provided
    ssl: {
        rejectUnauthorized: true // Necesario si estás usando Azure con SSL
    }
});

// Función para obtener una conexión del pool
const getConnection = async () => {
    try {
        const client = await pool.connect();
        return client;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error; // Lanzar el error para manejarlo en el lugar donde se llama a esta función
    }
};

export { getConnection };