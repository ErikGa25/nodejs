
CREATE DATABASE IF NOT EXISTS node20_mysql;

CREATE TABLE usuarios (
	id INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(60) NOT NULL,
    ciudad VARCHAR(60) NOT NULL,
	PRIMARY KEY (id)
) ENGINE=InnoDB;

INSERT INTO usuarios VALUES (NULL, "Fernando López Segura", 'Ciudad de México');
INSERT INTO usuarios VALUES (NULL, "Ricardo Gómez", 'Barcelona');
INSERT INTO usuarios VALUES (NULL, "María Alveria Mondragon", 'Londres');