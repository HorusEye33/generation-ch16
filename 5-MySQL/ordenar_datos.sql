USE world;

SELECT * FROM country;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country ORDER BY Population DESC;

SELECT Name, Population FROM country WHERE Name = 'Mexico';

SELECT * FROM country WHERE Name = 'Mexico';

-- Alias
SELECT 5 + 5;
-- AS muestra la columna con un nuevo nombre de columna
SELECT Name AS Nombre_de_pais, Population AS 'Población del país' FROM country
ORDER BY  Nombre_de_pais DESC;
-- DISTINCT Filtra los datos repetidos
SELECT DISTINCT Continent FROM country;

-- WHERE cláusula
-- < > <= >= != =
SELECT * FROM country WHERE LifeExpectancy < 50 
ORDER BY LifeExpectancy DESC;

SELECT * FROM country WHERE Continent != 'North America' 
ORDER BY Continent ASC; 

-- Between
-- Se utiliza junto con WHERE
SELECT * FROM country WHERE Population BETWEEN 50000000 AND 70000000
ORDER BY Population DESC;
-- Selecciona todo de la tabla country donde Population no este entre
-- el rango de los 50000000 a 70000000 y ordenalo por Population en orden Descendente
SELECT * FROM country WHERE Population NOT BETWEEN 50000000 AND 70000000
ORDER BY Population DESC;

-- OR / AND != -- Operadores Lógicos
SELECT * FROM country WHERE Continent = 'Asia' OR Continent = 'Europe'
OR Continent = 'North America';
-- Selecciona todo de la tabla country DONDE Continent sea diferente de Asia etc
SELECT * FROM country WHERE Continent != 'Asia' AND Continent != 'Europe'
AND Continent != 'North America';

-- Operador IN
-- Selecciona todo de la tabla country donde Continent SEA ('Asia', 'Europe', 'North America')
SELECT * FROM country WHERE Continent IN ('Asia', 'Europe', 'North America')
ORDER BY Continent;
-- Selecciona todo de la tabla country donde Continent NO SEA ('Asia', 'Europe', 'North America')
SELECT * FROM country WHERE Continent NOT IN ('Asia', 'Europe', 'North America')
ORDER BY Continent;

-- Filtrar valores nulos NULL
SELECT * FROM country WHERE IndepYear IS NOT NULL;
SELECT * FROM country WHERE IndepYear IS NULL;

-- LIKE sirve para buscar un patrón en especifico
-- '%' buscar cualquier cantidad de caracteres ANTES o DESPUES de lo que se le especifque
-- '_' especificamos un caracter
SELECT * FROM country WHERE Name LIKE '%and%';
SELECT * FROM country WHERE Name LIKE '%e__a';
SELECT * FROM country WHERE Name LIKE 'asia';
 