CREATE DATABASE accounts;
USE accounts;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,

    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,

    birthday DATE NOT NULL,
    gender VARCHAR(20) NOT NULL,

    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,

    phone VARCHAR(30) UNIQUE NULL,

    password_hash VARCHAR(255) NOT NULL,

    email_code VARCHAR(10),
    verified BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    ALTER TABLE users
ADD profile_image VARCHAR(255) DEFAULT 'default.png';
);
