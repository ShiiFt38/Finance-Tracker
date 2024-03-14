import React from 'react';

const Bar = ({ percent }) => {

  // Determine color based on percent
  let color = "bg-lime-500";
  if (percent >= 80) {
    color = 'bg-red-500';
  } else if (percent >= 70) {
    color = 'bg-orange-500';
  } else if (percent >= 60) {
    color = 'bg-yellow-500';
  }


  return (
    <div className="flex my-auto w-full h-fit gap-3 align-middle place-content-center text-right">
        <div className='h-[10px] w-[120px] rounded-xl bg-gray-300 overflow-hidden justify-items-start my-auto'>
          <div className={`rounded-xl h-full ${color}`} style={{ width: `${percent}%` }}></div>
        </div>
      <p className='text-right'>{percent}%</p>
    </div>
  );
};

export default Bar;
