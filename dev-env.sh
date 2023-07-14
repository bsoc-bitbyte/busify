#!/bin/sh

## Run docker Compose
sudo docker compose --env-file backend/.env up -d

## change directory to backend
cd backend

## Run migration
npm run migrate:dev

## Seed the DB
npm run seed

## start the backend development server
npm run start:dev &

## change drectory to frontend
cd ../frontend

##  start the frontend development server
npm run dev & gnome-terminal -- npm run dev
