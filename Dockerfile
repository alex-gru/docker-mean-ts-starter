FROM mhart/alpine-node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# must be installed globally, so do it right here
RUN npm install -g nodemon
RUN npm install -g reload

# Install app dependencies
ADD package.json .
RUN npm install

# Display used versions
RUN node --version
RUN nodemon --version

# Bundle app source
# file changes in . only lead to a rebuild which triggers only these remaining commands
ADD . /usr/src/app

CMD [ "npm", "start" ]
