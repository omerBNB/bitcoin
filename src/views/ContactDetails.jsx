import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../cmps/TransferFund'
import { UserService } from '../services/UserService'
import { MovesList } from '../cmps/MovesList'
import {
  loadContacts,
  removeContact,
  setFilterBy,
  loadContact,
  saveCurrContact,
} from '../store/actions/contact.actions'
import { connect } from 'react-redux'

class _ContactDetails extends Component {
  state = {
    contact: null,
    user:null,
    funds: '1',
    moves: [],
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const contact = await this.props.loadContact(id)
    const user = UserService.getLoggedinUser()
    this.setState({ contact: contact, user: user})
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.user?.moves !== this.state.user?.moves) {
      this.loadLoggedInUser()
    }
  }

  transferFunds = async (ev) => {
    ev.preventDefault()
    const { id } = this.props.match.params
    const trasnsferUser = this.state.user
    const contactToTranfer = this.state.contact
    const move = {
      name: contactToTranfer.name,
      at: new Date(),
      amount: +this.state.funds,
    }

    trasnsferUser.moves.push(move)
    trasnsferUser.coins -= +this.state.funds

    contactToTranfer.coins += +this.state.funds

    await this.props.saveCurrContact(contactToTranfer)
    UserService.update(trasnsferUser)

    const contact = await this.props.loadContact(id)
    this.setState({ contact })

    const user = UserService.getLoggedinUser()
    const moves = user.moves.filter((move) => move.name === this.props.contact.name)
    this.setState({ moves })
  }

  handleChange = (target) => {
    let value = +target.target.value
    this.setState(() => ({ funds: value }))
  }

  loadLoggedInUser = () => {
      const user = UserService.getLoggedinUser()
      const moves = user.moves.filter((move) => move.name === this.props.contact.name)
      this.setState({ moves, })
  }

  onBack = () => {
    this.props.history.push('/contact')
  }

  render() {
    const { contact, funds, moves } = this.state
    if (!contact || !moves) return <div>Loading...</div>
    return (
      <article className="details-container">
        <button className="details-btn" onClick={this.onBack}>
          Back
        </button>
        <section className="details-card">
          <img src={contact.img} alt="" />
          <h2>{contact.name}</h2>
          <h3>{contact.email}</h3>
          <h4>{contact.phone}</h4>
          <h4>Transfered Funds: {contact.coins}</h4>
          <TransferFund
            contact={contact}
            transferFunds={this.transferFunds}
            handleChange={this.handleChange}
            funds={funds}
          />
          <MovesList moves={moves} />
        </section>
      </article>
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

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)
