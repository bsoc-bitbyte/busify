#!/bin/sh

## change directory to backend
cd backend

## install the backend dependencies
echo "installing backend dependencies..."
npm i

## change directory to frontend
cd ../frontend

## install the Frontend dependencies
echo "installing frontend dependencies..."
npm i