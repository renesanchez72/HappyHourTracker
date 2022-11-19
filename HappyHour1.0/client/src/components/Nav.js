import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allhappyhours">All Happy Hours</NavLink>
          <NavLink to="/addhappyhour">Add Happy Hour</NavLink>
        </div>
      </nav>
    )
  }
}
