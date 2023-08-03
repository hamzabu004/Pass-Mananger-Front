import React from 'react'
import { useState } from 'react'

function Strength() {

    const strength = ['Weak', 'Medium', 'Strong']
    const [strengthIndex, setStrengthIndex]  = useState(2)
    const clr = ['#B81D13', '#EFB700', '#008450']

  return (
    <div className='flex flex-row gap-3'>
        <p>{strength[strengthIndex]}</p>
        <div className='flex flex-row gap-1'>
        {strength.map((el, index) => {
            
            return (
           
            <div className={`h-full w-2`} style={{
                backgroundColor: index <= strengthIndex ? clr[strengthIndex]: "none",
                'border': index <= strengthIndex ? 'none' : '1px solid'
            }}>
            </div>
            
            )
        })}
        </div>
    </div>
  )
}

export default Strength