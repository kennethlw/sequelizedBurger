DROP DATABASE IF EXISTS seq_burgers_db;

CREATE DATABASE seq_burgers_db;

USE seq_burgers_db;

CREATE TABLE burgers (
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);