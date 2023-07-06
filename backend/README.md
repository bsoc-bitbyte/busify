# Busify Backend

This is the backend for the Busify - Bus ticket booking application for IIIT Jabalpur.

## Getting started

### Setting up a backend

Note: Make sure docker containers are running before proceeding to the below steps.

* Move into the backend directory: `cd backend`
* Install the dependencies: `npm install`
* Migrate the database: `npm run migrate:dev`
* Seed database: `npm run seed`

### Working on the project

* Move into the project directory: `cd busify/backend`
* Run the development task: `npm run start:dev`
    * Starts a server running at http://localhost:3333
    * Automatically restarts when any of your files change

## Databases
PostgreSQL as a primary database and Redis for storing temporary data and as a message broker.
