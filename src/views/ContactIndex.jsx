import { logDOM } from '@testing-library/react'
import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactsList } from '../cmps/ContactsList'
import { FilterBy } from '../cmps/FilterBy'
import { connect } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'

// export class ContactIndex extends Component {
class _ContactIndex extends Component {
  // state = {
  //   contacts: null,
  //   filterBy: {
  //     name: '',
  //     email: '',
  //     phone: '',
  //   },
  // }

  componentDidMount() {
    this.props.loadContacts()
  }

  onChangeFilter = (filterBy) => {
    // this.setState({ filterBy: { ...filterBy } }, this.loadUsers)
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  // loadUsers = async () => {
  //   try {
  //     const contacts = await contactService.getContacts(this.state.filterBy)
  //     this.setState({ contacts })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
 
  onRemoveContact = async (contactId) => {
    try {
      // await contactService.deleteContact(contactId)
      // this.setState(({ contacts }) => ({
      //   contacts: contacts.filter((contact) => contact._id !== contactId),
      // }))
      const res = await this.props.removeContact(contactId)
    } catch (error) {
      console.log('error:', error)
    }
  }

  render() {
    const { contacts, filterBy } = this.props
    if (!contacts) return <div>Loading...</div>
    return (
      <section className='main-contact-container'>
        <FilterBy filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
        <ContactsList contacts={contacts} onRemoveContact={this.onRemoveContact} />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactModule.contacts,
  filterBy: state.contactModule.filterBy,
})

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
}

export const ContactIndex = connect(mapStateToProps, mapDispatchToProps)(_ContactIndex)
