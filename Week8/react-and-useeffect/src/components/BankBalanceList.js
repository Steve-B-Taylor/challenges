import React, { useState } from "react"

const BankBalanceList = props => {
  const [bankBalances, setBankBalances] = useState([
    { name: "Checking Account", balance: 0 },
    { name: "Savings Account", balance: 0 }
  ])

  const updateAccounts = event => {
    event.preventDefault()
    setBankBalances([
      { name: "Checking Account", balance: Math.random() * 60000 },
      { name: "Savings Account", balance: Math.random() * 400000 }
    ])
  }

  const bankAccountListItems = bankBalances.map(account => {
    return (
      <li key={account.name}>
        <strong>{account.name}</strong> - ${account.balance.toFixed(2)}
      </li>
    )
  })

  return (
    <div className="bank-accounts">
      <p>
        <a href="#" onClick={updateAccounts}>
          Refresh
        </a>
      </p>
      <ul>{bankAccountListItems}</ul>
    </div>
  )
}

export default BankBalanceList
