import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [items, setItems] = useState([]);

  //similar with componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setItems(data))
  });

  return (
    <div>
      <ul>
        { items.map(
          (item, index) => <li key={index}>{item.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
