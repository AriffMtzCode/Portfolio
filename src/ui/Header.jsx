import React from 'react'

export const Header = ({text}) => {
  return (
    <div className='bg-bg-footer h-32 border-y-2 border-bg-box mt-3 flex justify-start items-center'>
        <p className='text-4xl text-white font-bold ml-8'>{text}</p>
    </div>
  )
}
