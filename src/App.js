import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [dogImage, setDogImage] = useState(''); //Storage to store the image uRL
  const [animate, setAnimate] = useState(false);

  const fetchDog = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random'); //get the img
      const data = await response.json();

      setAnimate(false);
      setDogImage (data.message);
      setTimeout(() => {
        setAnimate(true);
      }, 50);
    } catch (err) {
      console.error('Failed to fetch dog image:', err);
    }
  }; 

  useEffect(() => {
    fetchDog();
  }, []); 

  return (
    <div className="app-container">
      {dogImage && (
        <div
          className={`dog-background ${animate ? 'fade-in' : ''}`}
          style={{ backgroundImage: `url(${dogImage})` }}
        />
      )}
      
      <div className="centered-content">
        <h1>🐶 Random Dog</h1>
        <button onClick={fetchDog}>Fetch New Dog</button>
      </div>
    </div>
  );
  
}

export default App;
