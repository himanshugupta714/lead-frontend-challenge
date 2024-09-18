# Kanban Board Application

## Overview

This is an interactive **Kanban board application** built using **ReactJS** with **TypeScript**. It allows users to interact with an API to display, group, and sort tickets based on various criteria such as status, user, and priority. The project is built with a focus on clean code structure, reusable components, and an optimized business logic implementation.

### Key Libraries Used

- **React**: The core library used to build the user interface.
- **TypeScript**: For static type-checking and improved code reliability.
- **TanStack React Query**: Used for fetching, caching, and synchronizing server state in the app.
- **Axios**: For making HTTP requests to the API.

## API Reference

**API Endpoint**: [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment)

### API Response

The API provides ticket and user data. Here is an example format:

```json
{
  "tickets": [
    {
      "id": "CAM-1",
      "title": "Update User Profile Page UI",
      "tag": ["Feature request"],
      "userId": "usr-1",
      "status": "Todo",
      "priority": 4
    },
    ...
  ],
  "users": [
    {
      "id": "usr-1",
      "name": "Anoop Sharma",
      "available": false
    },
    ...
  ]
}
```

## Project Structure

The project is well-structured with a focus on component reusability and clean separation of concerns.

- **src/components**: Contains reusable React components.
  - **Navbar**: Provides the options to group and sort tickets.
  - **List**: Displays grouped tickets.
  - **Card**: Displays individual ticket information such as title, priority, and user.
  - **Icons**: Includes reusable SVG icon components.
- **src/hooks**: Contains custom hooks for fetching data.
  - **useFetchTicketsData**: A custom hook that utilizes TanStack Query (React Query) to fetch ticket data from the API.
- **src/types**: Contains TypeScript interfaces and types used across the app.
  - **Ticket**: Defines the structure for a ticket.
  - **User**: Defines the structure for a user.
  - **Priority**: Defines priority levels for tickets.

## How to Run the Project

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn**

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/himanshugupta714/lead-frontend-challenge
   ```

2. **Navigate into the project directory**:

   ```bash
   cd kanban-board
   ```

3. **Install dependencies**:
   If you're using npm:

   ```bash
   npm install
   ```

   If you're using yarn:

   ```bash
   yarn install
   ```

4. **Run the project**:
   To start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. **Access the app**:
   Open a web browser and navigate to `http://localhost:3000`.

### Running Tests

If you have tests written, you can run them using the following commands:

```bash
npm test
```

or

```bash
yarn test
```

## Features

- **Grouping**: Users can group tickets by status, user, or priority.
- **Sorting**: Tickets can be sorted by priority or title.
- **Persisted State**: The selected grouping and sorting preferences are saved and persisted even after a page reload.
- **Responsive Design**: The application is fully responsive and adapts to different screen sizes.

## How to Interact with the Kanban Board

1. **Select a Grouping Option**:

   - Use the "Display" button to choose how to group the tickets (by Status, User, or Priority).

2. **Sort the Tickets**:

   - Sort the tickets either by their priority or by title using the sorting dropdown in the Navbar.

3. **View Ticket Details**:

   - Each ticket is displayed in a **Card** component, showing the title, priority, status, and assigned user.

## Conclusion

This project demonstrates how to build a **Kanban board** in React using **TypeScript**, **Axios**, and **TanStack React Query**. The codebase is well-structured with reusable components and optimal separation of concerns. The application also focuses on UI design and functionality by enabling users to group and sort tickets interactively.

Feel free to clone, contribute, or modify the project as needed.
