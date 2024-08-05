CREATE TABLE tarjeta (
    identificador SERIAL PRIMARY KEY,
    numero_tarjeta VARCHAR(16) NOT NULL,
    fecha DATE NOT NULL,
    ccv VARCHAR(3) NOT NULL,
    nombre_completo VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL
);
