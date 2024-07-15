#!/bin/sh

## Run docker Compose
sudo docker compose --env-file backend/.env up -d

## change directory to backend
cd backend

## install the backend dependencies
echo "installing backend dependencies..."
npm i

## Run migration
npm run migrate:dev

## Seed the DB
npm run seed

## change directory to frontend
cd ../frontend

## install the Frontend dependencies
echo "installing frontend dependencies..."
npm i