# DOCKER-VERSION 0.10.0 -*- conf -*-

FROM ubuntu:14.04

# make sure apt is up to date
RUN apt-get update

# node
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y nodejs
RUN ln -sf /usr/bin/nodejs /usr/local/bin/node

# app
ADD . /app
EXPOSE 8042
CMD ["node", "/app/index.js"]
