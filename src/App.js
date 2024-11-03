import React, { useState } from 'react';
import './App.css';
import { TableContent } from './TableContent';

function App() {
  const [tableContentOrder, setTableContentOrder] = useState(TableContent);

  const handleSortByDate = () => {
    const sortedArray = [...tableContentOrder].sort((a, b) => {
      const dateMap1 = new Date(a.date);
      const dateMap2 = new Date(b.date);
      if(dateMap1 !== dateMap2) {
        return dateMap2 - dateMap1;
      } else {
        return (b.views - a.views);
      }
    });

    setTableContentOrder(sortedArray);
  }


  const handleSortByViews = () => {
    const sortedArray = [...tableContentOrder].sort((a, b) => {
      if (a.views !== b.views) {
        return b.views - a.views;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });

    setTableContentOrder(sortedArray);
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableContentOrder.map((content, index) => (
              <tr key={index}>
                <td>{content.date}</td>
                <td>{content.views}</td>
                <td>{content.article}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
