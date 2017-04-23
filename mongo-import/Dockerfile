FROM mongo

COPY greeting.json /greeting.json
CMD mongoimport --host mongodb --db db --collection greetings --file /greeting.json --drop