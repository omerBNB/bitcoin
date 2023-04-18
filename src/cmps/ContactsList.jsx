import { ContactsPreview } from './ContactsPreview'

export function ContactsList({ contacts, onRemoveContact }) {
  return (
    <article className="contacts-container">
      {contacts.map((contact) => (
        <ContactsPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact}/>
      ))}
    </article>
  )
}

