USE sakila;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT() cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;

SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

/*
SUM()
*/
SELECT SUM(amount) AS 'Total de rentas' FROM payment;

SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- ¿Cual cliente realizo mas rentas? 148 - 46 / 318 -12 
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) DESC;

-- GROUP BY - Agrupa solo si se usa con SUM, AVG, y COUNT, pero omite los valores repetidos
-- ORDER BY - Ordena según la columna o función que le indiquemos ASC / DESC 
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cuál es el cliente que gastó mas? 526 - 221.55 / 248 - 50.85
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY COUNT(amount) DESC;

-- AVG() - Regresa el promedio
SELECT AVG(amount) AS Promedio FROM payment;

-- ¿Cual cliente gasto mas en promedio? 187 - 5.7 / 252 - 2.9
SELECT customer_id, AVG(amount) AS PromedioCliente FROM payment GROUP BY customer_id ORDER BY AVG(amount) ASC;




