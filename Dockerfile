FROM node:latest as build

WORKDIR /app

COPY server/package*.json ./server/
RUN cd ./server && npm install --omit=dev

COPY client/package*.json ./client/
RUN cd ./client && npm install 


COPY server ./server
COPY client ./client
COPY entrypoint.sh ./

EXPOSE 3000
EXPOSE 3001

ENTRYPOINT ["sh", "entrypoint.sh"]
