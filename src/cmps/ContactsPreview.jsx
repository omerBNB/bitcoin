import { Link } from 'react-router-dom'
import React from 'react'

export function ContactsPreview({ contact, onRemoveContact}) {
  return (
    <article className="contact-card-container">
      <section className="contact-card">
        <Link to={`/contact/${contact._id}`}>
          <img src={contact.img} alt="" />
        </Link>
        <Link to={`/contact/${contact._id}`}>
          <h2>{contact.name}</h2>
        </Link>
        <Link to={`/contact/edit/${contact._id}`}>Edit Contact</Link>
        <button onClick={() => onRemoveContact(contact._id)}>Delete Contact</button>
      </section>
    </article>
  )
}
