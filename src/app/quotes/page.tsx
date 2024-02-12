/**
 * This code imports React hooks and defines a component: Zitat.
 * Zitat fetches a random Chuck Norris quote from an API and displays it.
 * It also provides a button to fetch a new quote.
 */

'use client' // 👈 "use client" here added

import { ReactElement, useEffect, useState } from "react";

/**
 * Zitat component fetches Chuck Norris quotes and displays them.
 * @returns {ReactElement} A div element containing a quote and a button to fetch a new one.
 */

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
    <div className="quote-container">
      <p>{zitat}</p> <br />
      <button className="quotes" onClick={neuesZitat}>Neues Zitat</button>
    </div>
  );
}
