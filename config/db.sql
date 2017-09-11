DROP DATABASE IF EXISTS dh;
CREATE DATABASE dh;
USE dh;
CREATE TABLE IF NOT EXISTS projects_table (
    uid_project INT NOT NULL AUTO_INCREMENT,
    project_name VARCHAR(32),
    num_of_inputs INT,
    project_description TEXT,
    PRIMARY KEY (uid_project)
);

CREATE TABLE IF NOT EXISTS student_table (
    uid_student INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(32),
    PRIMARY KEY (uid_student)
);

CREATE TABLE IF NOT EXISTS testProject (
    uid_input INT NOT NULL AUTO_INCREMENT,
    fuid_student INT,
    input_meta TEXT,
    data TEXT,
    FOREIGN KEY (fuid_student) REFERENCES student_table(uid_student),
    PRIMARY KEY (uid_input)

);

INSERT INTO projects_table (project_name,num_of_inputs,project_description) VALUES ('testProject',2,'this is a test project');
INSERT INTO student_table (name) values ("Johnny Lindbergh");
INSERT INTO testProject (fuid_student,input_meta,data) values (1,"this is metadata","this is data");
