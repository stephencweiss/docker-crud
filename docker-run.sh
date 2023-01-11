#!/bin/bash

# map the exposed port (3000) to port 3001 locally.
# name the container (dcrud)
# use the image stephencweiss/docker-crud
docker run -d \
   -p 3001:3000 \
   --name dcrud \
   stephencweiss/docker-crud

docker run -d\
   --env POSTGRES_USER=postgres\
   --env POSTGRES_PASSWORD=password\
   --name postgress\
   -p 5432:5432\
   postgres

docker run -d --env POSTGRES_USER=postgres --env POSTGRES_PASSWORD=password --name postgress -p 5433:5432 postgres
   # -e POSTGRES_HOST='db'
   # DB_NAME='db_name'
   # -e DB_PASSWORD='password'