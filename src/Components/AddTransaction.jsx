import React, { useState } from 'react'

export default function AddTransaction() {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  return (
    <>
      <h3 className='lbl'>  Add New Transaction </h3>
      <form>
        <div>
            <label htmlFor='text' >Text</label>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Label...'/>
        </div>
        <div>
            <label htmlFor='amount'>
                Amount <br/>
                (Negative - Expense, Positive - Income)
            </label>
            <input type='number' value={amount}  onChange={(e) => setAmount(e.target.value) } placeholder='Enter Amount...' />
        </div>
        <div>
            <button type='submit' className='btn'> Add Transaction </button>
        </div>
      </form>
    </>
  )
}
