-- Create a new database
CREATE DATABASE IF NOT EXISTS vector;

-- Switch to use the database
USE vector;

-- account table
CREATE TABLE IF NOT EXISTS accounts (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    creation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- vector table
CREATE TABLE IF NOT EXISTS vectors (
    id INT AUTO_INCREMENT,
    response VARCHAR(100) NOT NULL,
    cue VARCHAR(100) NOT NULL,
    motive VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

-- account vector events table
-- a row is added when an account completes a vector
CREATE TABLE IF NOT EXISTS vector_events (
    id INT AUTO_INCREMENT,
    account_id INT NOT NULL,
    vector_id INT NOT NULL,
    event_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (account_id)
        REFERENCES accounts(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (vector_id) 
        REFERENCES vectors(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);