import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { TransferFund } from '../cmps/TransferFund'
import { UserService } from '../services/UserService'
import { MovesList } from '../cmps/MovesList'

export class ContactDetails extends Component {
  state = {
    contact: null,
    funds: "1",
    moves:[]
  }

  componentDidMount() {
    this.loadContact()
    this.loadLoggedInUser()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadContact()
    }
    if (prevState.user?.moves !== this.state.user?.moves) {
      this.loadLoggedInUser()
    }
  }

   transferFunds = async (ev) => {
    ev.preventDefault()
    
    const trasnsferUser = await UserService.getById('u101')
    const contactToTranfer = await contactService.getContactById(this.state.contact._id)
    const move = {
      name: contactToTranfer.name,
      at: new Date,
      amount: +this.state.funds
    }
    trasnsferUser.moves.push(move)

    trasnsferUser.coins -= +this.state.funds
    contactToTranfer.coins += +this.state.funds

    contactService.saveContact(contactToTranfer)
    UserService.update(trasnsferUser)

    this.loadContact()
  }


  handleChange = (target) => {
    let value = +target.target.value
    this.setState(() => ({ funds: value }))
  }

  loadContact = async () => {
    try {
      const contact = await contactService.getContactById(this.props.match.params.id)
      this.setState({ contact })
    } catch (error) {
      console.log(error)
    }
  }

  loadLoggedInUser = async () => {
    try {
      const user = await UserService.getById('u101')
      const moves = user.moves.filter(move => move.name === this.state.contact.name)
      this.setState({ moves })
    } catch (error) {
      console.log(error)
    }
  }
  onBack = () => {
    this.props.history.push('/contact')
  }

  render() {
    const { contact, funds, moves } = this.state
    if (!contact || !moves) return <div>Loading...</div>
    return (
      <article className="details-container">
        <button className='details-btn' onClick={this.onBack}>Back</button>
        <section className="details-card">
          <img src={contact.img} alt="" />
          <h2>{contact.name}</h2>
          <h3>{contact.email}</h3>
          <h4>{contact.phone}</h4>
          <h4>{contact.coins}</h4>
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
