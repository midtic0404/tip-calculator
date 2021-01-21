import './App.css';
import React, { useState } from 'react';
import InitialPrice from './components/InitialPrice';
import TipSelection from './components/TipSelection';
import TipsTotal from './components/TipsTotal';

function App() {
  const [initialPrice, setInitialPrice] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);

  return (
    <div className='container'>
      <h1>Tip Calculator</h1>
      <InitialPrice setInitialPrice={setInitialPrice} />
      <TipSelection setTipPercentage={setTipPercentage} />
      {initialPrice > 0 && tipPercentage !== 0 && (
        <TipsTotal initialPrice={initialPrice} tipPercentage={tipPercentage} />
      )}
    </div>
  );
}

export default App;
