import React from 'react'

export default function Revenue() {
  return (
    <div className='inc-exp-container'>
        <div>
            <h3>Income</h3>
            <p className='money plus'>+$1000</p>
        </div>
        <div>
            <h3>Expenses</h3>
            <p className='money minus'>-$250</p>
        </div>
    </div>
  )
}
