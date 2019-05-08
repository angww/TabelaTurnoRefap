import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import BtChangeTheme from './Theme';
import { trackUser, trackEvent} from './analytics';

import './CardMenu.css';

class CardMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    if (typeof this.dropdownMenu !== 'undefined') {
      
      if (this.dropdownMenu == null) {
        return true;
      }
      //debugger
      let evTarget = event.target;
      if (!this.dropdownMenu.contains(evTarget)) {
        
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });  
        
      }
      }
  }

  handleSelectTable = (event) => {
    this.props.history.push(event.target.value);
    
  }

  render() {
    let buttonsForTest = "";
    //debugger
    if (process.env.NODE_ENV === 'development') {
      buttonsForTest = (
        <>
          <Link className="linkCard" to="/Reduc">Reduc</Link>
          <Link className="linkCard" to="/Teste4">Teste4</Link>
        </>
      );
    }

    return (
      <>
      <div style={{float: 'right', userSelect: 'none'}} onClick={this.showMenu}>
      ⚙️
      </div>
        {
          this.state.showMenu
            ? (
              <div className="cardMenu" ref={(element) => { this.dropdownMenu = element; }}>
                <BtChangeTheme className="linkCard" />
                <Link className="linkCard" to="/Refap">Refap 23-7-15</Link>
                <Link className="linkCard" to="/Refap0">Refap 0-8-16</Link>
                {buttonsForTest}

              </div>
            )
            : (
              null
            )
        }
      </>
    );
  }
}
CardMenu.propTypes = {
  //classes: PropTypes.object.isRequired,
};


export default withRouter(CardMenu);