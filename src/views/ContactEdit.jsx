import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { logDOM } from '@testing-library/react'
import {
  loadContacts,
  removeContact,
  setFilterBy,
  loadContact,
  saveCurrContact,
} from '../store/actions/contact.actions'
import { connect } from 'react-redux'

class _ContactEdit extends Component {
  state = {
    contact: null,
  }

  // async componentDidMount() {
  //   const contactId = this.props.match.params.id
  //   if (contactId) {
  //     try {
  //       const contact = await contactService.getContactById(contactId)
  //       this.setState({ contact })
  //     } catch (error) {
  //       console.log('error:', error)
  //     }
  //   }
  // }

  async componentDidMount() {
    const { id } = this.props.match.params
    let contact
    // id? await this.props.loadContact(id) : contactService.getEmptyContact()
    if (id) {
      contact = await this.props.loadContact(id)
    } else {
      contact = contactService.getEmptyContact()
      // this.setState({ contact })
    }
    this.setState({ contact,})
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
    // this.props.contact[field] = value
    this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
  }

  render() {
    const { contact } = this.state
    // const { contact } = this.props
    if (!contact) return <div>Loading...</div>
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

const mapStateToProps = (state) => ({
  contacts: state.contactModule.contacts,
  contact: state.contactModule.contact,
  filterBy: state.contactModule.filterBy,
})

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
  loadContact,
  saveCurrContact,
}

export const ContactEdit = connect(mapStateToProps, mapDispatchToProps)(_ContactEdit)
