import { Link, NavLink, withRouter } from 'react-router-dom'

export function AppHeader() {
      const imgUrl = 'images.png'
  return (
    <header className="main-header">
      <NavLink to="/" className="main-header-home-navlink">
        <div className='flex'>
        <img className="main-header-img" src={require(`../assets/imgs/${imgUrl}`)} alt="" />
        <h2>Bitcoin</h2>
        </div>
      </NavLink>
      <div className="header-navs">
        <NavLink exact to="/contact">
          Contacts
        </NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/statistics">Charts</NavLink>
      </div>
    </header>
  )
}
