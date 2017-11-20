# Coaster Tycoon API

[...]

## Setup

1. Fork & clone this repository
1. `yarn` or `npm install`
1. `createdb coaster_tycoon_dev && createdb coaster_tycoon_test`
1. `npm run knex migrate:latest`
1. `npm run knex seed:run`
1. To run the server with nodemon, run `npm run dev`
