'use client' // 👈  "use client" here added

import { ReactElement, useEffect, useState } from "react";

export function Button(): ReactElement {
    const [count, setCount] = useState(0);
    return <button onClick={() => { setCount((prev) => prev + 1); }} type="button">Click {count}</button>;
  }
  
  export function Zitat() {
    const [zitat, setZitat] = useState('');
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        fetch('https://api.chucknorris.io/jokes/random?category=dev')
          .then(response => response.json())
          .then(data => setZitat(data.value))
          .catch(error => console.error('Fehler beim Laden des Zitats:', error));
      }
    }, []);
  
    const neuesZitat = () => {
      if (typeof window !== 'undefined') {
        fetch('https://api.chucknorris.io/jokes/random?category=dev')
          .then(response => response.json())
          .then(data => setZitat(data.value))
          .catch(error => console.error('Fehler beim Laden des Zitats:', error));
      }
    };
  
    return (
      <div className="zitat-container">
        <p>{zitat}</p> <br />
        <button className="zitate" onClick={neuesZitat}>Neues Zitat</button>
      </div>
    );
  }
  
  