# Reservation App

This is a simple reservation management application built with React. The app allows users to filter, sort, and search reservations.

## Features

- **Filter Reservations**: Filter reservations by status, shift, area, and date.
- **Sort Reservations**: Sort reservations by first name, last name, and guest number.
- **Search Reservations**: Search reservations by customer name.

## Components

### ReservationList

The `ReservationList` component is the main component that integrates all functionalities including filtering, sorting, and searching reservations. It fetches reservation data from a remote server and manages the state of filters, sort orders, and search queries.

### ReservationFilter

The `ReservationFilter` component provides dropdown menus and date input to filter reservations based on different criteria.

### ReservationSorter

The `ReservationSorter` component provides buttons to sort reservations by first name, last name, and guest number. It also highlights the active sort button.

### ReservationSearch

The `ReservationSearch` component provides a text input to search for reservations by customer name.

## Installation

1. **Download the project zip file**.

2. **Extract the zip file** to your desired location.

3. **Navigate to the project directory**:

    ```bash
    cd reservation-app
    ```

4. **Install dependencies**:

    ```bash
    npm install
    ```

5. **Start the development server**:

    ```bash
    npm start
    ```

    This will start the development server and open the app in your default web browser.

## Running Tests

The project includes unit tests for the components using Jest and React Testing Library.

1. **Run the tests**:

    ```bash
    npm test
    ```

    This will run all the tests and display the results in the terminal.

### Unit Tests

- **ReservationFilter**: Tests that the `onFilter` callback is called with the correct arguments when different filter options are selected.
- **ReservationSorter**: Tests that the `onSort` callback is called with the correct arguments and that the active sort button is highlighted correctly.

## Potential Optimizations
- **Given more time, the following optimizations and improvements could be made to the project:

    # Integration Tests:
    - Add comprehensive integration tests to cover the entire user flow, including filtering, sorting, and searching reservations.
    Ensure that the integration tests validate the interaction between different components and the overall behavior of the application.

    # Error Handling:
    - Add proper error handling for network requests to manage cases where data fetching fails.
    Display user-friendly error messages to inform users of issues such as network errors or data unavailability.

    # Conduct an accessibility audit and ensure that all interactive elements are accessible to users with disabilities.
    - Implement ARIA roles and attributes where necessary to improve the accessibility of the application.

    # Optimization of Tests:
    - Increase test coverage and ensure that edge cases are thoroughly tested.
    Optimize test performance by mocking external dependencies and minimizing redundant tests.