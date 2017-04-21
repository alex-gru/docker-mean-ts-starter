FROM mongo

COPY data.json /data.json
CMD mongoimport --host mongodb --db db --collection data --upsert --file /data.json