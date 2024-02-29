import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import Revenue from './Components/Revenue'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <>
      <Header />
      <GlobalProvider>
        <Balance />
        <Revenue/>
        <TransactionList/>
        <AddTransaction/>
      </GlobalProvider>
      
    </>
  )
}

export default App
