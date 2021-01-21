import React, { useState } from 'react';

const InitialPrice = ({ setInitialPrice }) => {
  const [price, setPrice] = useState(0);
  const handleInput = (e) => {
    setPrice(+e.target.value);
    setInitialPrice(+e.target.value);
  };
  return (
    <div className='initial-price'>
      <form className='price-form'>
        <label>Initial Price</label>
        <input type='number' onChange={handleInput} />
      </form>
      <h2>Initial Price is : ${price.toFixed(2)}</h2>
    </div>
  );
};

export default InitialPrice;
