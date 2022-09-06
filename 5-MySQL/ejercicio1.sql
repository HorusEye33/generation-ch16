-- Se crea la base de datos
CREATE DATABASE generation;
-- Se usa la base de datos
USE generation;
-- Se crea la tabla 
CREATE TABLE cohorte_16 (
alumno_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre CHAR(50) NOT NULL,
apellido CHAR(50) NOT NULL,
companieros INT NOT NULL,
direccion VARCHAR(150) NOT NULL,
proyecto VARCHAR(150) NOT NULL 
);
-- Se selecciona todo de la tabla cohorte_16 para visualizarla
SELECT * FROM cohorte_16;
-- Se insertan datos dentro de la tabla cohorte_16
INSERT INTO cohorte_16 (nombre, apellido, companieros, direccion, proyecto)
VALUES ('Victor', 'Fernandez', 7, 'Tulancingo Hidalgo', 'Java'),
('Jonatan', 'Vazquez', 6, 'CDMX', 'Javascript'),
('Raul', 'Sanchez', 7, 'Guadalajara', 'Javascript'),
('Maria', 'Vargas', 4, 'Estado de México', 'Java'),
('Magali', 'Quiroz', 7, 'CDMX', 'JavaScript');
-- Se selecciona todo de la tabla cohorte_16 para visualizarla
SELECT * FROM cohorte_16;
-- Se borra la fila donde alumno_id es igual a 3
DELETE FROM cohorte_16
WHERE alumno_id = 3;
-- Se actualiza la fila donde id_alumno es igual 5 y se le modifica nombre y apellido
UPDATE cohorte_16
SET nombre = 'Marina',
apellido = 'Pardo'
WHERE alumno_id = 5;
-- Otra forma de reemplazar valores
UPDATE cohorte_16
SET nombre = REPLACE (nombre, 'Magali', 'Marina');
-- Se selecciona las columnas nombre y apellido de la tabla cohorte_16 donde nombre es igual a Victor para poder visualizarlas 
SELECT nombre, apellido FROM cohorte_16 WHERE nombre = 'Victor';
-- Se selecciona todo de la tabla cohorte_16 para poder visualizarla
SELECT * FROM cohorte_16;
-- Se selecciona nombre y apellido de la tabla cohorte_16 y se ordena por apellido
SELECT nombre, apellido FROM cohorte_16 ORDER BY apellido;
/*ASC - DESC*/