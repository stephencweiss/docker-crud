CREATE USER docker_user;
  -- CREATE DATABASE docker_crud; -- this is unnecessary because it's defined as an environment variable?
  GRANT ALL PRIVILEGES ON DATABASE docker_crud TO docker_user;

-- Add uuid-ossp for primary keys
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS accounts (
	user_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
	username TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL,
	salt TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP
);
