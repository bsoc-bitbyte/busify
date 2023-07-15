#!/bin/sh

## Run docker Compose
sudo docker compose --env-file backend/.env up -d

## change directory to backend
cd backend

## start the backend development server
npm run start:dev &

## change directory to frontend
cd ../frontend

##  start the frontend development server
npm run dev & gnome-terminal -- npm run dev
