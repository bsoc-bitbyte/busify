#Busify-Ticket Booking System

A centralised bus ticket booking system that will allow the students to book tickets in advance through an online website, saving time and effort. Students will no longer need to physically stand in long queues to purchase tickets.

The ticket booking system will provide a user-friendly interface where passengers can search for available routes, select their desired travel date and time and make secure online payments.

# Plan

### FUNCTIONAL REQUIREMENTS

We can divide the whole app into these modules `Client`, `Main Server`, `Notification Microservice`, `Admin Panel` and `Mobile App for Conductors`.

### Client App

The main frontend application where users can interact with UI to book tickets

**Key Requirements:**

- Users can search for the bus with boarding and destination points
- Can see the list of all the available buses from the selected filter
- Users can authenticate themselves with their college email ID through Google OAuth
- Can add tickets to their order cart ( max 4 tickets per user )
- Place the order anytime 30 mins before the bus departure time
- The ticket booking starts at 1 PM every day.
- Do the payment
- See the success message

**Optional Requirements:**

- Users can track bus location live on the website (like the Where’s my train app )
- Dynamic Bus timing
- Checkin system

### Main Centralised Server

The main centralised server can manage the client app, micro-services and mobile app.

- Handling user requests
- Connecting with the micro-services
- QR Code Generation after booking the ticket
- Authentication
- Secure online payments
- Admin panel for the bus agency
- Ticket management tools for bus conductor
- Handling multiple concurrent requests from users

### Notification Micro-service

- This micro-service will generate a QR code based on the confirmed ticket.
- Extract information of each individual student for whom tickets are booked and send an email with the respective QR codes.

### Admin Panel

- Add and update the details of the buses which includes date and time, starting and ending locations, checkpoints, total number of tickets
- See the details of the booked tickets

### Mobile App for Conductors

- Scanner for the QR Codes to check the authenticity of the tickets
- Invalidate the scanned QR code
- View a list of all the booked tickets

## Demo Design

Design- https://www.figma.com/file/DCKxO44wwjeAxmUHLvZ5wT/Busify?type=design&node-id=31%3A208&t=7aXZk7qlTON3A8C3-1

Design Todos

- Admin panel design
- Mobile App UI
- Enhancements

## Screenshots

![App Screenshot](image.png)

## Roadmap

- Visits the Web App

- Login with institute Email

- Search for the Bus

- Select the Bus

- Add Tickects(Max. 4)

- Notification of successful Booking

- Payment Conformation

- Book The Tickects

## Tech Stack

## Frontend

- ReactJS
- TypeScript :)
- React Router Dom v6
- MUI
- React Query
- ES Lint
- Testing Library ( on to be decided )
- Github Hooks setup
- Documentation

## Backend

- NestJS

## Features

- Online Payment System
- Time Saving No need to stand in long queue

## Contributing

Contributions to Busify are always welcome! If you would like to contribute, please follow these steps:

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

1. Fork this repository.

2. Clone the forked repository.

git clone `https://github.com/bsoc-bitbyte/busify.git`

3. Navigate to the project directory.
   `cd busify`

4. Make changes in source code.

5. Stage your changes and commit

6. git add .

7. git commit -m "<your_commit_message>"

8. Push your local commits to the remote repo.

9. git push

10. Create a PR to develop repository.

## License

IIITDM Jabalpur
