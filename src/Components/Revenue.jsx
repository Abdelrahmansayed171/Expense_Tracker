import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MoneyFormatter from '../context/MoneyFormatter';



export default function Revenue() {
  
  const {transactions} = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
  );
  return (
    <div className='inc-exp-container'>
        <div>
            <h3>Income</h3>
            <p className='money plus'>+{MoneyFormatter(income)}</p>
        </div>
        <div>
            <h3>Expenses</h3>
            <p className='money minus'>-{MoneyFormatter(expense)}</p>
        </div>
    </div>
  )
}
