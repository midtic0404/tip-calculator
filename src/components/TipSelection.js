import React from 'react';
import Tip from './Tip';

const TipsSelection = ({ setTipPercentage }) => {
  return (
    <div className='tips'>
      <Tip setTipPercentage={setTipPercentage} amount={15} />
      <Tip setTipPercentage={setTipPercentage} amount={18} />
      <Tip setTipPercentage={setTipPercentage} amount={20} />
    </div>
  );
};

export default TipsSelection;
