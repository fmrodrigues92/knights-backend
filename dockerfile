FROM node:latest
RUN apt-get update
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install nodemon -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
