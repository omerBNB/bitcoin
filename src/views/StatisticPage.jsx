import { Component } from 'react'
import { Charts } from '../cmps/Chrats'

import { BitcoinSerivce } from '../services/BitcoinService'

export class StatisticPage extends Component {
  state = {
    dataForMarketPrice: null
  }

  async componentDidMount(){
    const dataForMarketPrice = BitcoinSerivce.getMarketPrice()
    this.setState({ dataForMarketPrice })
  }

  render() {
    const {dataForMarketPrice} = this.state
    if (!dataForMarketPrice) return <div>Loading...</div>
    return <Charts data={dataForMarketPrice} />
  }
}
