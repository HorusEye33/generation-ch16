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
 