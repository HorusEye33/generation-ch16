USE sakila;

-- El titulo de las peliculas con los idiomas que tienen
SELECT title, name FROM film, language;

-- El monto de un día en específico
SELECT customer_id, SUM(amount) AS total_dia FROM payment WHERE payment_date 
BETWEEN '2005-06-15 00:00:00' AND '2005-06-15 23:59:59' GROUP BY customer_id ORDER BY total_dia DESC;

-- ¿Cuantas peliculas estan hechas en un mismo idioma? 1000 peliculas
SELECT SUM(language_id) AS 'FILM MISMO IDIOMA' FROM film;

-- Las direcciones de cada país:
SELECT address, district FROM address ORDER BY district ASC;

-- Mostrar las direcciones de cada país
SELECT 
country.country AS Pais,
city.city AS Ciudad,
address.address AS Direccion
FROM country
INNER JOIN city ON city.country_id = country.country_id
INNER JOIN address ON address.city_id = city.city_id;
