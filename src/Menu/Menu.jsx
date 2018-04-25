import React, { Component } from 'react'

class Menu extends Component {
  render () {
    return (
      <div className="navbar-fixed"> 
        <nav>
          <div class="nav-wrapper">
            <a class="brand-logo">Gonth's</a>
            <ul class="right hide-on-med-and-down">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
              <li><a>Link 3</a></li>
              <li><a>Link 4</a></li>
              <li><a>Link 5</a></li>
              <li><a>Link 6</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Menu