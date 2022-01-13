import React, { useState } from 'react';
import './App.css';
import MacbookPro from './MacbookPro.jpg';
import StripeContainer from './StripeContainer';

function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App">
      <>
        <h1 className="shopName">Shopping place</h1>
        {showItem ? (
          <StripeContainer />
        ) : (
          <>
              <div className="infoTovar">
                <h3 className="tovarName">Macbook Pro 16' M1 Max</h3>
                <h2 className="tovarPrice">$3,499.00</h2>
                <button className="purchaseBtn" onClick={() => setShowItem(true)}>
                  Purchase 🛒
                </button>
              </div>
              <img src={MacbookPro} className="MacImg" alt="MacbookPro" />
          </>
        )}
      </>
    </div>
  );
}

export default App;
