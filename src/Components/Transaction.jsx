import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function Transaction({transaction}) {
    
    const {deleteItem} = useContext(GlobalContext)
  
  
    const sign = transaction.amount > 0 ? '+' : '-'
    
    return(
        <li className={sign === '+' ? 'plus' : 'minus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteItem(transaction.id)} className='delete-btn'>x</button>
        </li>
    )
}
