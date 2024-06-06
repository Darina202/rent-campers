# AdventureCampers. Rent your camper!

## Project Description

This application is for a company that rents camper vans in Ukraine. The app
allows users to easily search, browse and book campers for unforgettable trips.

## Features

### Homepage

- A brief description of the company's services.

### Camper Catalog

- View campers of various configurations.
- "Load more" button to display additional ads.
- Add ads to favorites using the heart-shaped button.
- Saving selected ads after reloading the page.
- A modal window with detailed information about the camper and the booking
  form.

### Favorite Ads Page

- View ads added to your favorites.
- Remove ads from favorites.

## Technical Details

### Routing (React Router)

- `/` - homepage.
- `/catalog` - camper catalog.
- `/favorites` - favorite ads page.
- Redirect to the homepage for non-existent routes.

### Ad Management

- Use [mockapi.io](https://mockapi.io/) for backend.
- Pagination: 4 ads per page.

## Requirements

- Displaying ad cards according to design.
- Saving the state of the "Favorites" buttons after reloading the page.
- Modal window with detailed information about the camper:
- Opening by clicking on the "Details" button.
- Closing by clicking on the close button, clicking on the background or
  pressing the Esc key.
- Camper information and reviews with dynamic tab switching.
- Reservation form with mandatory fields: name, e-mail, reservation date.
- Validation of the form: the form is not sent with incorrect data, the page is
  reloaded upon successful submission.
- Displaying the rental price in whole numbers.

## Running the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/Darina202/rent-campers.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the local server:
   ```sh
   npm start
   ```
4. Open in your browser: `http://localhost:3000`

## Technologies Used

- React
- React Router
- mockapi.io
- SCSS for styling
