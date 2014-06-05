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
RUN npm install -g gulp

# java and other build dependencies
RUN apt-get install -y openjdk-7-jre-headless
RUN apt-get install -y unzip git curl
RUN apt-get clean

# gocd
ENV GO_VERSION 14.1.0
ENV GO_REV 18882
ENV GO_SERVER_DEB go-server-$GO_VERSION-$GO_REV.deb
ENV GO_AGENT_DEB go-agent-$GO_VERSION-$GO_REV.deb
ENV GO_BASE_URL http://download01.thoughtworks.com/go/$GO_VERSION/ga

ADD $GO_BASE_URL/$GO_SERVER_DEB /opt/$GO_SERVER_DEB
ADD $GO_BASE_URL/$GO_AGENT_DEB /opt/$GO_AGENT_DEB

# install server and agent
RUN dpkg -i /opt/$GO_SERVER_DEB
RUN dpkg -i /opt/$GO_AGENT_DEB

EXPOSE 8153

#/var/lib/go-server       #contains the binaries and database
#/etc/go                  #contains the pipeline configuration files
#/var/log/go-server       #contains the server logs
#/usr/share/go-server     #contains the start script
#/etc/default/go-server   #contains all the environment variables with default values. These variable values can be changed as per requirement.
# VOLUME ["/var/lib/go-server"]
