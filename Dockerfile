FROM mhart/alpine-node:6

# for development: auto-restart on changes in backend (nodejs), auto-recompile on changes in frontend (ts->js)
RUN npm install -g nodemon
RUN npm install -g typescript
# auto-reload browser on changes
RUN npm install -g reload

RUN node --version
RUN nodemon --version
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD package.json /usr/src/app/
RUN npm install

# Bundle app source
# file changes in . only lead to a rebuild which triggers only these remaining commands
ADD . /usr/src/app

CMD [ "npm", "start" ]
