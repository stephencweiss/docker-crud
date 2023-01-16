# stage 1 - Compile
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT} as base
WORKDIR /usr/app/
# copy the dependencies
COPY package*.json ./
# copy ts config
COPY tsconfig*.json ./
# install the dependencies
# RUN cat /usr/app/package.json
RUN npm install

# copy the source code
# COPY . .



# FROM base as prod
# RUN npm run build
