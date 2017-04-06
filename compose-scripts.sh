mongod --port 27017 --dbpath='/data/db' &
mongoimport --db db --collection data --file data.json
tsc -w public/js/greeter.ts & # Compile ts file in watch mode (recompile on file changes)
nodemon -L --debug=5858 /usr/src/app/ # -L is very important here for use in a Docker container, see here: https://github.com/remy/nodemon#application-isnt-restarting
