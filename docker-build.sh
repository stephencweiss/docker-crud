#!/bin/bash

# This is short lived.
# It will be replaced by a `docker-compose` file.

# name the docker image
# relative path to Dockerfile
docker build \
  --tag stephencweiss/docker-crud/dev \
  ./server

