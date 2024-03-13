import React from 'react';

const Bar = ({ percent }) => {

  // Determine color based on percent
  let color;
  if (percent > 80) {
    color = 'red';
  } else if (percent > 70) {
    color = 'orange';
  } else if (percent > 60) {
    color = 'yellow';
  } else {
    color = 'lime'
  }


  return (
    <div className="flex my-auto w-full h-fit align-middle place-content-center text-right">
        <div className='h-[10px] w-[150px] rounded-xl bg-gray-300 justify-items-start my-auto'>
        <div className={`rounded-xl h-full bg-${color}-500`} style={{ width: `${percent}%` }}></div>
        </div>
      <p className='text-right'>{percent}</p>
    </div>
  );
};

export default Bar;
