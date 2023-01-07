import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext)

  const incomeTotal = transactions.reduce((acc, item) => item.amount > 0 ? acc += item.amount : acc,0).toFixed(2)
  const expenseTotal = transactions.reduce((acc, item) => item.amount < 0 ? acc += Math.abs(item.amount) : acc, 0).toFixed(2)

  return (
  <>
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${incomeTotal}</p>
      </div>
      <div>
          <h4>Expense</h4>
          <p className="money minus">-${expenseTotal}</p>
      </div>
    </div>
  </>
  )
}

export default IncomeExpense