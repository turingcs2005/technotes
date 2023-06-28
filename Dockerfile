    # build front end
    FROM node:latest AS client_build

    WORKDIR /app

    COPY ./client /app/

    RUN npm install
    RUN node_modules/.bin/ng build

    # build back end
    FROM node:latest AS server_build

    WORKDIR /app

    COPY ./server /app/
    COPY --from=client_build /app/dist/client /app/dist

    RUN npm install --production

    # build docker
    FROM ubuntu:latest

    WORKDIR /app

    RUN apt-get update
    RUN apt-get -y install nodejs

    COPY --from=server_build /app ./

    CMD ["node", "./bin/www"]