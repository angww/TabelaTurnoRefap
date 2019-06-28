import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';
import BtChangeTheme from './Theme';
import { trackUser, trackEvent} from './analytics';

import './CardMenu.css';

function uuid_five() {
  return 'xxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}



class CardMenu extends Component {
  constructor() {
    super();
    
    
    let visitCache = (window.localStorage.getItem('numVisitCounter') == null) ? 0 : window.localStorage.getItem('numVisitCounter');

    this.state = {
      showMenu: false,
      numVisitCounter: visitCache
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({numVisitCounter: this.state.numVisitCounter*1+1 });
    window.localStorage.setItem('numVisitCounter', this.state.numVisitCounter);
    //debugger

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
       <svg id="Layer" style={{stroke: 'var(--color-font-main)', fill: 'var(--color-font-main)'}} enable-background="new 0 0 64 64"  transform="translate(4,-5)" height="28" viewBox="0 0 64 64" width="28" xmlns="http://www.w3.org/2000/svg">
        <path  d="m32 8c-13.233 0-24 10.767-24 24s10.767 24 24 24 24-10.767 24-24-10.767-24-24-24zm0 44c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"/>
        <path d="m32 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
        <path d="m23 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
        <path d="m41 29c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"/>
       </svg>
      </div>
        {
          this.state.showMenu
            ? (
              <div className="cardMenu" ref={(element) => { this.dropdownMenu = element; }}>
                <BtChangeTheme className="linkCard" />
                <Link className="linkCard" to="/Refap">Refap 23-7-15</Link>
                <Link className="linkCard" to="/Refap0">Refap 0-8-16</Link>
                {buttonsForTest}
                <span>{uuid_five()}-{this.state.numVisitCounter}</span>
                
                  <div>Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                  <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                
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