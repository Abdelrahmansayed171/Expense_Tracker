import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MoneyFormatter from '../context/MoneyFormatter'

export default function Balance() {
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount) // we may not type return here
  const balance = amounts.reduce((sum, item) => sum+=item, 0)


  return (
    <>
      <h2>Your Balance:</h2>
      <h2>{MoneyFormatter(balance)}</h2>
    </>
  )
}
