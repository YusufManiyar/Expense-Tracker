import React, {useState, useContext} from 'react'
import { v4 }  from 'uuid'
import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()
        if(amount === 0) {
          return
        }
    
        const transaction = {
          id: v4(),
          text,
          amount
        }
        addTransaction(transaction)

        setText('')
        setAmount(0)
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
              <label htmlFor="text">Text</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
              <label htmlFor="amount">Amount <br />
              (negative - expense, positive - income)</label>
              <input type="number" required value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
