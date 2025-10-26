-- CREATE DATABASE task_tracker;
-- USE task_tracker;

-- CREATE TABLE users(
-- id INT auto_increment,
-- username VARCHAR(50),
-- email VARCHAR(50) unique,
-- password VARCHAR (50),
-- created_at TIMESTAMP default current_timestamp,
-- primary key(id)
-- );

-- CREATE TABLE tasks(
-- id INT auto_increment,
-- user_id INT,
-- title VARCHAR(100),
-- description TEXT,
-- status ENUM('pending', 'in progress', 'completed'),
-- priority ENUM('low', 'mid', 'high'),
-- due_date DATE,
-- created_at TIMESTAMP default current_timestamp,
-- primary key(id),
-- foreign key(user_id) references users(id) 
-- );

-- CREATE TABLE subtasks(
-- id INT auto_increment,
-- task_id INT, title VARCHAR(100),
-- status ENUM('pending', 'completed'),
-- created_at TIMESTAMP default current_timestamp,
-- primary key(id),
-- foreign key(task_id) references tasks(id)
-- );

use task_tracker;
select * from tasks;