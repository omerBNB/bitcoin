import { Link } from 'react-router-dom'
import React from 'react'

export function MovesListPreview({ move }) {
  return (
    <article className="move-list-card">
        <h3>At: {move.at}</h3>
        <h3>Amount: {move.amount}</h3>
        <hr />
    </article>
  )
}
