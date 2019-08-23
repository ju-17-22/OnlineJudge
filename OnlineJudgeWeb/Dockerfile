FROM node:12.2.0

WORKDIR /onlinejudeweb

ENV PATH /onlinejudeweb/node_modules/.bin:$PATH

COPY package.json /onlinejudeweb/package.json

RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . /onlinejudeweb


