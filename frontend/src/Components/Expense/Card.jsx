import React from 'react';

const Card = ({ transaction }) => {
  return (
    <>
      <div className='mt-20'>
        <div className='w-full lg:w-[30vw] p-4 rounded-xl h-auto pb-4 border-2 bg-gray-50'>
          <h2 className='text-[#9400FF] textfont text-xl '>Date : <span className='maintext'>{transaction.date}</span></h2>
          <h2 className='text-[#F94C10] textfont text-xl '>Volume : <span className='maintext'>{transaction.volume} RS</span></h2>
          <h2 className='text-[#F11A7B] textfont text-xl '>
            Deepak : <span className='maintext'>{transaction.deepakVolume} RS</span> - Manish : <span className='maintext'>{transaction.manishVolume} RS </span>
          </h2>
          <h2 className='text-[#252525] textfont  text-xl  '>Euro Price : <span className='maintext'>{transaction.euroPrice} RS</span></h2>
          <h2 className='text-[#252525] textfont text-xl  '>Euro Added : <span className='maintext'>{transaction.euroAdded}<span className='border-l-2 mx-4 border-gray-200'></span></span> Adding Fees: <span className='maintext'>{transaction.addingFees}</span></h2>
          <h2 className='text-[#252525] textfont text-xl  '>Total Euro(Added+Fees) : <span className='maintext'>{transaction.totalEuroWithFees}</span></h2>
          <h2 className='text-[#252525] textfont text-xl  '>USDT Buying Price : <span className='maintext'>{transaction.usdtBuyingPrice}</span></h2>
          <h2 className='text-[#252525] textfont text-xl  '>USDT Purchased : <span className='maintext'>{transaction.usdtPurchased}</span></h2>
          <h2 className='text-[#252525] textfont text-xl  '>USDT Selling : <span className='maintext'>{transaction.usdtSellingPrice} RS</span></h2>
          <h2 className='text-[#22C8AA] textfont text-xl  '>Profit Earned : <span className='maintext'>{transaction.profitEarned} RS</span></h2>
          <h2 className='text-[#22C8AA] textfont text-xl  '>Profit Division : <span className='maintext'>{transaction.profitDivision}</span></h2>
          <h2 className='text-[#22C8AA] textfont text-xl  '>Profit Sent to Deepak : <span className='maintext'>{transaction.profitSentToDeepak} RS</span></h2>
          <h2 className='text-[#22C8AA] textfont text-xl  '>Profit Sent to Manish : <span className='maintext'>{transaction.profitSentToManish} RS</span></h2>
          <h2 className='text-[#F11A7B] textfont text-xl  '>Profit Sent to Harsh : <span className='maintext'>{transaction.profitSentToHarsh} RS</span></h2>
        </div>
      </div>
    </>
  );
};

export default Card;
