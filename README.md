# Camper Rental Application

This application is created for a company that provides camper rental services
in Ukraine. The application consists of three main pages:

1. **Home Page**: A general description of the services provided by the company.
2. **Catalog Page**: A catalog of campers of various configurations that users
   can filter by location, equipment, and type.
3. **Favorites Page**: A list of ads added by the user to their favorites.

The user interface includes navigation (styled at your discretion) and a viewing
area.

## Technical Requirements

The application should be implemented as per the design and specifications
provided.

### Functional Requirements

1. **Ad Card Implementation**:

   - Each camper rental ad card should be implemented according to the provided
     design.

2. **Catalog Page**:

   - The first page of the catalog should render 4 ads initially.
   - Additional ads should be loaded upon clicking the "Load more" button.

3. **Favorite Ads**:

   - Clicking the heart-shaped button on an ad card should add the ad to the
     favorites list and change the color of the button.
   - The user's favorite ads should persist across page reloads. If an ad is
     added to favorites and the page is refreshed, the ad should still be marked
     as a favorite.
   - Clicking the heart-shaped button again should remove the ad from the
     favorites list and revert the button color to its initial state.

4. **Modal Window**:

   - Clicking the "Show more" button should open a modal window with detailed
     information about the camper.
   - The modal window should close when the close button (in the form of an
     “x”), the backdrop, or the Esc key is pressed.

5. **Tabs in Modal Window**:

   - The modal window should display information about the camper’s features and
     reviews. The displayed information should depend on the active tab.
   - The modal window also contains a booking form with fields for name, email,
     booking date, and comment. The name, email, and booking date fields are
     mandatory and should be validated for correct input. The form should not be
     submitted if the data is invalid. If the form is valid, the page should
     refresh upon submission.

6. **Price Format**:
   - The rental price should be set as a single value (e.g., 8000). In the UI,
     it should be displayed with a comma (e.g., 8000,00).

### Routing

The application should use React Router for routing. The routes are:

- `/`: Home page with a general description of the company’s services.
- `/catalog`: Page containing the catalog of campers.
- `/favorites`: Page with ads added by the user to favorites.

If the user navigates to a route that does not exist, they should be redirected
to the home page.
