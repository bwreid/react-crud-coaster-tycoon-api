# Coaster Tycoon API

This is a project intended to give students an idea of MVC architecture using Node, Express, Knex, and ES6 Classes.

## Instructions

You're building a website that tracks amusement parks and the rides on them. Migrations and seeds have already been provided for you. The relationship between **Parks** and **Rides** is that **Parks** have many **Rides**.

Get the tests to pass by adding the CRUD routes for both the **Parks** and **Rides** resource. Not that _you will not be able to delete a park without first deleting all of the associated rides._

## Existing Code

Currently one route exist: `/parks`. Look in the `models/`, `controllers/`, and `routes/` folders and answer the following guiding questions:

* What does the `static` keyword do?
* What type of object does `Park.all()` return?

## Setup

1. Fork & clone this repository
1. `yarn` or `npm install`
1. `createdb coaster_tycoon_dev && createdb coaster_tycoon_test`
1. `npm run migrate` which will run migrations for both development and test
1. `npm run seed` which will run seeds for both development and test
1. To run the server with nodemon, run `npm run dev`
