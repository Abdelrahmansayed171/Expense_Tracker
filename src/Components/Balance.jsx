import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Balance() {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount) // we may not type return here

  return (
    <>
      <h2>Your Balance:</h2>
      <h2>$0.00</h2>
    </>
  )
}
