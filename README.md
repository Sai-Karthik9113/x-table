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

1. **Clone the repository**: `git clone https://github.com/Sai-Karthik9113/x-table.git`

2. **Navigate to the project directory**: `cd date-and-views-table`

3. **Install the dependencies**: `npm install`

4. **Start the development server**: `npm start`

5. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Usage
- Click the "Sort by Date" button to sort the articles from the most recent to the oldest.
- Click the "Sort by Views" button to sort the articles based on the number of views in descending order.
- The table will automatically update to reflect the selected sorting criteria.

## Code Overview
The application consists of a main component (`App.js`) where the table is rendered and sorted based on user input. The article data is stored in `TableContent.js` as an array of objects, each representing an article with its date, views, and title.

## Sorting Logic
- **Sort by Date:** The articles are sorted in descending order based on the date. If two articles have the same date, they are sorted by views in descending order.
- **Sort by Views:** The articles are sorted in descending order based on views. If two articles have the same number of views, they are sorted by date in descending order.

---------------------------------------------------------------------------------------------------------------------------------------------------
Thanks to everyone who helped and supported during this project.
