import { Component } from 'react'
import { UserService } from '../services/UserService'
import { Link, NavLink, withRouter } from 'react-router-dom'

export class Login extends Component {
  state = {
    username: '',
  }

  login = (ev) => {
    ev.preventDefault()
    const user = UserService.login(this.state.username)
    console.log(user)
  }

  handleChange = ({ target }) => {
    let value = target.value
    this.setState(() => ({ username: value }))
  }

  render() {
    const imgUrl = 'images.png'
    const { username } = this.state
    return (
      <section className="signup-container">
        <form action="" className="signup-form" onSubmit={this.login}>
          <div className="flex">
            <img src={require(`../assets/imgs/${imgUrl}`)} alt="" />
            <h1>Bitcoin</h1>
          </div>
          <h3>Login to Bitcoin</h3>
          <p>Not your device? Use a private or incognito window to sign in.</p>
          {/* <h3>Please enter your name</h3> */}
          <div className="signup-name-input">
            <label htmlFor="">Please enter your Name:</label>
            <input
              value={username}
              onChange={this.handleChange}
              type="text"
              name="username"
              id="username"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    )
  }
}