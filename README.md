# Date and Views Table

This is a simple React application that displays a table of articles with their corresponding views and dates. Users can sort the articles by date or by views using the provided buttons.

## Features

- Display a table of articles with their dates and views.
- Sort the articles by:
  - Most recent date first
  - Views in descending order
- Responsive and user-friendly interface

## Technologies Used

- React
- JavaScript
- CSS

## Installation

To run this application locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Sai-Karthik9113/x-table.git
   ```
2. **Navigate to the project directory**:
   ```
   cd x-table
   ```
3. **Install the dependencies**:
   ```
   npm install
   ```
4. **Start the development server**:
   ```
   npm start
   ```
5. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Click the "Sort by Date" button to sort the articles from the most recent to the oldest.
- Click the "Sort by Views" button to sort the articles based on the number of views in descending order.
- The table will automatically update to reflect the selected sorting criteria.

## Screenshot & GIFs

### Initial View

![XTable][on page load]

### Filter By Date

![XTable][filter by date]

### Filter By Views

![XTable][filter by views]

## Sorting Logic
- **Sort by Date:** The articles are sorted in descending order based on the date. If two articles have the same date, they are sorted by views in descending order.
- **Sort by Views:** The articles are sorted in descending order based on views. If two articles have the same number of views, they are sorted by date in descending order.

## License

This project is licensed under the MIT License.

--------------------------
This is a student project developed as part of a React.js learning exercise.



[on page load]: src/assets/screenshots/image.png
[filter by date]: src/assets/screenshots/20241216-0438-17.7760915_1_2.gif
[filter by views]: src/assets/screenshots/20241216-0438-17.7760915_1_1.gif