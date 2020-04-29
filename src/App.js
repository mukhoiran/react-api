import React, { useState , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //similar with componentDidMount()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(function(data){
        setItems(data)
        setIsLoading(false)
      })
  });

  if(isLoading){
    return <p>Loading...</p>
  }

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
