CREATE USER docker_user;
  -- CREATE DATABASE docker_crud; -- this is unnecessary because it's defined as an environment variable?
  GRANT ALL PRIVILEGES ON DATABASE docker_crud TO docker_user;

-- Add uuid-ossp for primary keys
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS accounts (
	user_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP
);

INSERT INTO accounts (username, password, email, created_on)
VALUES
('user1', 'value1', 'user1@gmail.com', now()),
('user2', 'value2', 'user2@gmail.com', now()),
('user3', 'value3', 'user3@gmail.com', now()),
('user4', 'value4', 'user4@gmail.com', now());