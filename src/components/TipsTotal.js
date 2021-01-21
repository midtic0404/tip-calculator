import React from 'react';

const TipsTotal = ({ initialPrice, tipPercentage }) => {
  const tip = (initialPrice * tipPercentage).toFixed(2);
  const total = (initialPrice + +tip).toFixed(2);
  console.log(tip);
  console.log(total);
  return (
    <div className='tips-total'>
      <h2>
        <span>Tips:</span>
        <span className='amount-result'>
          ({tipPercentage * 100}%) ${tip}
        </span>
      </h2>
      <h2>
        <span>Total:</span>
        <span className='amount-result'>${total}</span>
      </h2>
    </div>
  );
};

export default TipsTotal;
