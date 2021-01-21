import React from 'react';

const Tip = ({ amount, setTipPercentage }) => {
  const handleClick = (e) => {
    const percentage = amount * 0.01;
    setTipPercentage(percentage);
  };
  return (
    <div onClick={handleClick} className='tip'>
      <h1>{amount}%</h1>
    </div>
  );
};

export default Tip;
