import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'
export default function TransactionList() {
  
  const {transactions} = useContext(GlobalContext)
  
  return (
    <>
      {transactions.length > 0? (<h3 className='lbl' >History</h3>) : (null)}
      <ul className='list'>
        {transactions.map((transaction) => {
          return(<Transaction key={transaction.id} transaction={transaction}/>)
        })}
        
      </ul>
    </>
  )
}
