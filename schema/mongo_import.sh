#!/bin/sh

mongo DemoDb --eval "db.dropDatabase()"
mongoimport -d DemoDb -c User User.json
mongoimport -d DemoDb -c Book Book.json
