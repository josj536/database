import { Pool } from "pg";
import config from "./../config";

const pool = new Pool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port: config.port, // Asegúrate de incluir el puerto si es diferente al predeterminado (5432)
    ssl: {
        rejectUnauthorized: false // Necesario si estás usando Azure con SSL
    }
});

const getConnection = () => {
    return pool.connect();
};

export { getConnection };
