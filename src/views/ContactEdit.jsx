import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { logDOM } from '@testing-library/react'

export class ContactEdit extends Component {
  state = {
    contact: contactService.getEmptyContact(),
  }

  async componentDidMount() {
    const contactId = this.props.match.params.id
    if (contactId) {
      try {
        const contact = await contactService.getContactById(contactId)
        this.setState({ contact })
      } catch (error) {
        console.log('error:', error)
      }
    }
  }

  onSavecontact = async (ev) => {
    ev.preventDefault()
    try {
      await contactService.saveContact({ ...this.state.contact })
      this.props.history.push('/')
    } catch (error) {
      console.log('error:', error)
    }
  }

  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value
    this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
  }

  render() {
    const { contact } = this.state
    const { name, email, phone } = contact
    return (
      <section>
        <h1 className="edit-h1">{contact._id ? 'Edit' : 'Add'} contact:</h1>
        <section className="contact-edit">
            <img src={contact.img} alt="" />
          <form onSubmit={this.onSavecontact} className="edit-form">
            <div className="flex contact-field">
              <label htmlFor="name">Name: </label>
              <input value={name} onChange={this.handleChange} type="text" name="name" id="name" />
            </div>
            <div className="flex contact-field">
              <label htmlFor="email">Email: </label>
              <input
                value={email}
                onChange={this.handleChange}
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="flex contact-field">
              <label htmlFor="phone">phone: </label>
              <input
                value={phone}
                onChange={this.handleChange}
                type="text"
                name="phone"
                id="phone"
              />
            </div>
            <button className="edit-save-btn">Save</button>
          </form>
        </section>
      </section>
    )
  }
}
