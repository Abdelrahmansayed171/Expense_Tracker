import React from 'react'

export default function Transaction({transaction}) {
    const sign = transaction.amount > 0 ? '+' : '-'
    return(
        <li className={sign === '+' ? 'plus' : 'minus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className='delete-btn'>x</button>
        </li>
    )
}
