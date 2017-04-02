mongod --port 27017 --dbpath='/data/db' &
mongoimport --db db --collection data --file data.json
nodemon -L /usr/src/app/
# -L is very important here for use in a Docker container, see here: https://github.com/remy/nodemon#application-isnt-restarting
