import { Component } from 'react'
import { UserService } from '../services/UserService'
import { BitcoinSerivce } from '../services/BitcoinService'
import { StatisticPage } from './StatisticPage'

export class UserStats extends Component {
  state = {
    currUser: null,
  }

  async componentDidMount() {
    const currUser = await UserService.getUser()
    currUser['btc'] = await BitcoinSerivce.getRate(currUser.coins)
    this.setState({ currUser })
  }

  render() {
    const { currUser } = this.state
    if (!currUser) return <div>Please Login...</div>
    return (
      <section className="userstats-page-container">
        <section className="user-stats-container">
          <h1>{currUser.name}</h1>
          <h2>{currUser.coins} BTC</h2>
          <h3>{currUser.btc} BTC</h3>
        </section>
        <StatisticPage/>
      </section>
    )
  }
}
