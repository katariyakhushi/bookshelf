# Personal Bookshelf

This project is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

### Book Search Page
- An input field for users to type in a book's name.
- Real-time search results as the user types.
- Uses the Open Library API for fetching results: https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1
- Displays the search results in a list of cards, with each card representing a book result.

### Personal Bookshelf Page
- Users can add books from the search results to a "My Bookshelf" page.
- Utilizes the Web Storage API (localStorage) to store the user's bookshelf persistently.
- A separate page to display the user's personal bookshelf.
- A button on the search results page directing users to their personal bookshelf page.

### Tech Stack & Styling
- Initialized using Create React App (CRA).
- Styling options include CSS-in-JS, CSS modules, or regular CSS classnames.
- Only client-side rendering is implemented.

### Evaluation Criteria
- Efficient API usage and data fetching.
- Proper React component structure and interactivity.
- Smooth user experience and intuitive interface.
- Effective styling and layout presentation.
- Responsive design for various screen sizes (bonus points).

## Components
### BookShelf
- Fetches data from localStorage to display the user's personal bookshelf.

### BookCard
- A reusable card component to display individual book information.

### Book
- Calls the Open Library API via search and displays the results.

## Functionalities
1. **useState**, **useEffect**, **useNavigate** hooks for state management and navigation.
2. Props to pass data between components.
3. Axios for API calls.
4. CSS for loader and designing the interface.
5. Add and remove functionality for books on the bookshelf.

## Setup Instructions
### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/katariyakhushi/bookshelf.git
    cd personal-bookshelf
    ```
2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application
1. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Deployment
The project is deployed on Netlify. You can access it using the following link: [khushi-bookshelf.netlify.app](https://khushi-bookshelf.netlify.app/)

## Project Structure
```
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Book.jsx
│   │   ├── BookCard.jsx
│   │   └── BookShelf.jsx
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
├── README.md
└── package.json
```

## Additional Information
- The project is built with React hooks to manage state and side effects.
- Axios is used for making API calls to the Open Library.
- LocalStorage is used to persist the user's bookshelf.
- The application is styled using regular CSS for simplicity and better maintainability.

## Future Improvements
- Implement pagination for search results.
- Enhance the UI/UX design.
- Add user authentication for a more personalized experience.

Feel free to explore and contribute to the project! If you have any questions or suggestions, please open an issue or submit a pull request on the GitHub repository.