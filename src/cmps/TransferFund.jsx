import { Link } from 'react-router-dom'
import React from 'react'

export function TransferFund({ contact, transferFunds, handleChange, funds }) {
  return (
    <article className="transfer-fund-container">
      <form action="" onSubmit={transferFunds}>
        <h3>Transfer coins to {contact.name}</h3>
        <label htmlFor="">Amount: </label>
        <input
          value={funds}
          onChange={handleChange}
          type="range"
          min="1"
          max="100"
        />
        <button>Transfer</button>
      </form>
    </article>
  )
}
