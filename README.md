# course-planner
Project repository for the course `Selected Topics in Software Engineering`, Dept. CS, University of Salzburg, Austria

## Project Plan
Course perspective and all relevant information can be [found here.](https://docs.google.com/document/d/1RymleWm07xmH_LnFB5_LOq7yFwj1wB7OvTax7AeAAUc/edit?usp=sharing)

## Build & Run & Debug & Hot-Code-Reload
First, install dependencies locally. 

`npm install`

Now, we run `docker-compose` ([docker-compose.yml](docker-compose.yml)) which runs `nodemon` to enable debugging and auto restart on file changes (both front- and backend).

`docker-compose up --build`

`-build` rebuilds the image if changes are detected

This builds and (re-)creates the container, and attaches the debugger and file watcher (auto-restart with `nodemon`).

optional: `-d` makes the container running in the background (use `docker stop course-planner` to stop)


## Display the app in your browser

[http://localhost:8080](http://localhost:8080)

