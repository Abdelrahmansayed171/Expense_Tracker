import React from 'react'

export default function TransactionList() {
  return (
    <>
      <h3 className='lbl' >History</h3>
      <ul className='list'>
        <li>
          Cash <span>+$250</span><button className='delete-btn'>x</button>
        </li>
        <li>
          Cash <span>+$250</span><button className='delete-btn'>x</button>
        </li>
        <li>
          Cash <span>+$250</span><button className='delete-btn'>x</button>
        </li>
      </ul>
    </>
  )
}
