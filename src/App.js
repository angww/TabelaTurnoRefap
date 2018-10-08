import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
/*import Button from '@material-ui/core/Button';*/
/*import Menu from './menu';*/
import Tabela from './tabela2';

import './App.css';


class App extends Component {
  state = {
    tabelaName: "Refap23"
  };
  handleClick = event => {
    let state1 = this.state.tabelaName === "Refap23" ? "Teste4" : "Refap23";
    this.setState({ tabelaName: state1 });
  };
  render() {
    const {tabelaName} = this.state;
  /* <Menu></Menu> */
    return (
      <div className="App">

        
        <Tabela month="7" tabela={tabelaName} classes={{a:'b'}}></Tabela>
        
      </div>
    );
  }
}

export default App;
