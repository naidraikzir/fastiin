FROM node:alpine

RUN npm cache clean -f

ADD . /App
WORKDIR /App
RUN npm install

EXPOSE 8080

CMD ["node", ".", "--host=0.0.0.0"]
