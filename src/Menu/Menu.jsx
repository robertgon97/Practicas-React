import React, { Component } from 'react'

class Menu extends Component {
  render () {
    return (
      <div className="navbar-fixed"> 
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo center">
              <img src="../favicon.ico" alt="Gonth's" height="65" />
            </a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="https://github.com/robertgon97">Github</a></li>
              <li><a href="https://www.facebook.com/robertgonzalezoropeza">Facebook</a></li>
              <li><a href="https://twitter.com/@robert_gon97">Twitter</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu