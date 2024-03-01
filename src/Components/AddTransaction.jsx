import React, { useContext, useState } from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState'

export default function AddTransaction() {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const {addItem} = useContext(GlobalContext)


  const {transactions} = useContext(GlobalContext) // debugging purposes

  const addTransaction = (e) => {
      
      console.log(transactions)

      e.preventDefault()

      const newTransaction = {
        id: Math.floor(Math.random() * 1000000000),
        text,
        amount: +amount
      }
      
      addItem(newTransaction)
      setAmount(0)
      setText('')

  }

  return (
    <>
      <h3 className='lbl'>  Add New Transaction </h3>
      <form onSubmit={addTransaction}>
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
