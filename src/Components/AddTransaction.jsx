import React from 'react'

export default function AddTransaction() {
  return (
    <>
      <h3 className='lbl'>  Add New Transaction </h3>
      <form>
        <div>
            <label htmlFor='text' >Text</label>
            <input type='text' placeholder='Enter Label...'/>
        </div>
        <div>
            <label htmlFor='amount'>
                Amount <br/>
                (Negative - Expense, Positive - Income)
            </label>
            <input type='number' placeholder='Enter Amount...' />
        </div>
        <div>
            <button type='submit' className='btn'> Add Transaction </button>
        </div>
      </form>
    </>
  )
}
