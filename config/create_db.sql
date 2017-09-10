DROP DATABASE IF EXISTS digital_humanities;

CREATE DATABASE digital_humanities;

USE digital_humanities;


CREATE TABLE digital_humanities.project_meta (
	`pri_key` INT UNSIGNED NOT NULL AUTO_INCREMENT,
	`project_name` VARCHAR(255) NOT NULL,
	`num_inputs` INT UNSIGNED NOT NULL,
	`meta_data` VARCHAR(1000),
		PRIMARY KEY (`pri_key`)
);