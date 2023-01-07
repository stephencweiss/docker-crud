# stage 1 - Compile
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT} as builder

WORKDIR /usr/app
# Copy the dependencies
COPY package*.json ./
# install the dependencies
RUN npm install
# copy the source code
COPY . .
# compile the code
RUN npm run build

# stage 2
ARG VARIANT="18-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/app/out ./dist

# COPY ormconfig.docker.json ./ormconfig.json
# COPY .env .

EXPOSE 3000
CMD node dist/start.js