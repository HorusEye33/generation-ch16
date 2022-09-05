-- Se crea la base de datos 'tienda'
CREATE DATABASE tienda;
-- Se usa la base de datos 'tienda'
USE tienda; 
-- Se elimina la base de datos
DROP DATABASE tienda;
-- Se crea una nueva tabla dentro de la base de datos
CREATE TABLE clientes (
cliente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
telefono CHAR(50) NOT NULL,
direccion VARCHAR(150) NOT NULL
);
-- Insertar valores a una tabla
INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Comala'),
('Victor', 'Fernández', '555555234', 'Comala');
-- Selecciona todo de la tabla clientes
SELECT * FROM clientes;
-- Borra de la tabla clientes donde cliente-id es igual a 2
DELETE FROM clientes
WHERE cliente_id = 2;







