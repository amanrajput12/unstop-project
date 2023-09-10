import React from 'react';

const Requirement = ({ value }) => {
  return (
    <div className='flex gap-4'>
      
      {value.map((val, index) => {
        console.log(index, val);
        return (
          <div  className='border  rounded-md hover:bg-slate-700 mt-3 ' key={index}>
            <h2 className='text-blue-400 p-1 hover:text-white cursor-pointer'>{val}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Requirement;
