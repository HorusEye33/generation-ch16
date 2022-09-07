USE tienda;

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

INSERT INTO compra(cliente_id, fecha_compra, total, cantidad_productos)
values (9, '2022-09-07', 100.00, 1);


-- Inner Join
-- Explícita
-- Solo muestra coincidencias entre las dos tablas
SELECT *
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

SELECT
clientes.cliente_id AS 'Número de cliente',
clientes.nombre AS Nombre,
compra.fecha_compra
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Unión implícita
-- NO se utiliza la clausula JOIN
SELECT *
FROM clientes, compra
WHERE clientes.cliente_id = compra.cliente_id;

-- LEFT JOIN
SELECT * 
FROM clientes
LEFT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- RIGHT JOIN  
SELECT * 
FROM clientes
RIGHT JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Mostrar las direcciones de cada país
USE sakila;

/*
adress - city_id / adress
city   - sity_id / city / country_id
country - country_id / country
*/

SELECT
address.address,
city.city,
city.country_id
FROM address
INNER JOIN city
ON address.city_id = city.city_id;

SELECT
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;


