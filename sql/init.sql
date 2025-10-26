CREATE DATABASE IF NOT EXISTS task_tracker;

DROP USER IF EXISTS 'Yenterick'@'%';
DROP USER IF EXISTS 'Yenterick'@'localhost';

CREATE USER 'Yenterick'@'%' IDENTIFIED BY '2007';
GRANT ALL PRIVILEGES ON *.* TO 'Yenterick'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

USE task_tracker;

CREATE TABLE IF NOT EXISTS users(
  id INT auto_increment PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(200),
  created_at TIMESTAMP default current_timestamp
);

CREATE TABLE IF NOT EXISTS tasks(
  id INT auto_increment PRIMARY KEY,
  user_id INT,
  title VARCHAR(100),
  description TEXT,
  status ENUM('pending', 'completed'),
  priority ENUM('low', 'mid', 'high'),
  created_at TIMESTAMP default current_timestamp,
  foreign key(user_id) references users(id)
);

CREATE TABLE IF NOT EXISTS subtasks(
  id INT auto_increment PRIMARY KEY,
  task_id INT,
  title VARCHAR(100),
  status ENUM('pending', 'completed'),
  created_at TIMESTAMP default current_timestamp,
  foreign key(task_id) references tasks(id)
);
