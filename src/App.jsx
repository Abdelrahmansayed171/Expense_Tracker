import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import Revenue from './Components/Revenue'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div >
        <Balance />
        <Revenue/>
        <TransactionList/>
        <AddTransaction/>
      </div>
      
    </>
  )
}

export default App
