import React from 'react';
import ScratchCard from './components/ScratchCard';
import './App.css';

function App() {
  const gifts = [
    {
      id: 1,
      imageUrl: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
      width: 300,
      height: 200,
      recipient: 'Family Member 1'
    },
    {
      id: 2,
      imageUrl: 'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649',
      width: 300,
      height: 200,
      recipient: 'Family Member 2'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>regalos para ti</h1>
      </header>
      <main className="gifts-container">
        {gifts.map(gift => (
          <div key={gift.id} className="gift-card">
            <h2>{gift.recipient}</h2>
            <ScratchCard
              imageUrl={gift.imageUrl}
              width={gift.width}
              height={gift.height}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
