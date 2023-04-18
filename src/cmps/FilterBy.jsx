
import { logDOM } from '@testing-library/react'
import React, { Component } from 'react'

export class FilterBy extends Component {
  state = {
    filterBy: null,
  }
handleChange = ({ target }) => {
  const field = target.name
  let value = target.value

  this.setState(
    ({ filterBy }) => ({ filterBy: { ...filterBy, [field]: value } }),
    () => this.props.onChangeFilter(this.state.filterBy)
  )
}
  componentDidMount() {
    this.setState({ filterBy: { ...this.props.filterBy } })
  }

  render() {
      const {filterBy} = this.state
      if (!filterBy) return <div>Loading...</div>
      const {name,email,phone} = this.state.filterBy
    return (
      <form action="">
        <section className="filter-container">
        <h1 className="filter-h1">Search Contacts By:</h1>
          <label htmlFor="">Name:</label>
          <input type="text" onChange={this.handleChange} value={name} name="name" id='name'/>
          <label htmlFor="">Email:</label>
          <input type="text" onChange={this.handleChange} value={email} name="email" id='email'/>
          <label htmlFor="">Phone:</label>
          <input type="text" onChange={this.handleChange} value={phone} name="phone" id='phone'/>
        </section>
      </form>
    )
  }
}
