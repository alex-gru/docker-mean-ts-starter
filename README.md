# course-planner
Project repository for the course `Selected Topics in Software Engineering`, Dept. CS, University of Salzburg, Austria

## Project Plan
Course perspective and all relevant information can be [found here.](https://docs.google.com/document/d/1RymleWm07xmH_LnFB5_LOq7yFwj1wB7OvTax7AeAAUc/edit?usp=sharing)

## Build & Run

1. Download and install `Docker` on your machine: [Docker Store](https://store.docker.com/search?type=edition&offering=community)

2. Fork and clone this repository

3. `cd` into the local repository

4. Build the Docker image as defined in the [Dockerfile](https://github.com/alex-gru/course-planner/blob/master/Dockerfile)

`docker build -t course-planner .`

`-t` tags the image with a nice name, here `course-planner`

`.` tells Docker to search for `Dockerfile` in the current directory

5. Run the Docker image

`docker run -d -p 8080:8080 course-planner`

`-d` makes the container running in the background (use `docker stop course-planner` to stop)

`-p 8080:8080` maps the app-internal port 8080 to the external port 8080

6. Display the app in your browser

[http://localhost:8080](http://localhost:8080)

