import React from 'react';
import ScratchCard from './components/ScratchCard';
import './App.css';

function App() {
  const memoGifts = [
    {
      id: 1,
      width: 300,
      height: 200,
      imageUrl: 'memo/car.jpeg',
    },
      {
      id: 1,
      width: 300,
      height: 200,
      imageUrl: 'memo/comic1.jpeg',
    },
      {
      id: 1,
      width: 300,
      height: 200,
      imageUrl: 'memo/comic2.jpeg',
    },
      {
      id: 1,
      width: 300,
      height: 200,
      imageUrl: 'memo/comic3.jpeg',
    },
      {
      id: 1,
      width: 300,
      height: 200,
      imageUrl: 'memo/comic4.jpeg',
    },

    ]
  const paloGifts =[
  {
      id: 2,
      width: 300,
      height: 200,
      imageUrl: '/palo/car.jpeg',
    },
        {
      id: 2,
      width: 900,
      height: 600,
      imageUrl: '/palo/download.jfif',
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>regalos para ti</h1>
      </header>

        <main className="gifts-container">
            <h2>MEMO REGALOS :O !!</h2>
            {memoGifts.map(gift => (
                <div key={gift.id} className="gift-card">
                    <h2>..? QUE ES ???</h2>
                    <ScratchCard
                        imageUrl={gift.imageUrl}
                        width={gift.width}
                        height={gift.height}
                    />
                </div>
            ))}

            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p>
            <p>...</p><p>...</p><p>...</p>v
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p><p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p>
            <p>...</p><p>...</p><p>...</p>v
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p><p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p>
            <p>...</p><p>...</p><p>...</p>
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p><p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p>
            <p>...</p><p>...</p><p>...</p>
            <p>...</p>
            <p>...</p><p>...</p>
            <p>...</p><p>...</p>


            <p>...</p>


            <h2>PALO REGALOS TAMBIEEEEEEEEEEEN &lt;(0_0&lt;) &lt;(0_0)&gt; (&gt;0_0)&gt;</h2>

                {paloGifts.map(gift => (
                <div key={gift.id} className="gift-card">
                    <h2>..? QUE ES ???</h2>
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
