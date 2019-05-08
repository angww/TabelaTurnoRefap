import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabela from './tabela2';
import CardMenu from './CardMenu';
//import withAnalytics from './analytics';
import './App.css';


class App extends Component {
  state = {
    tableName: this.props.tableName
  };
  
  render() {
    let {tableName} = this.state;
    const stl = {
      width: '100%',
      height: '100%',
      position: 'fixed',
      textalign: 'center',
      paddingTop: '0px',
      textAlign: 'center',
      
    };
    const debugdiv = {position: 'fixed', top:'0px', height: '40px', width: '100%', background: 'red', zIndex: '40'};
    
    const handleClick = () => {
      let cl = document.body.classList;
      if (cl.contains('themeBlack')) { cl.remove('themeBlack');  } else { cl.add('themeBlack'); }

    };

    //
  /*   <div style={debugdiv}>Debug: {process.env.NODE_ENV}</div>  */
  /* <div style={stl}>http://tabelaturno.github.io<br /> Obrigado pela preferência! ☺  </div> */
    return (
      <>
        
        <div className="topBar">
        🗓 tabelaturno.github.io/{tableName}
          <CardMenu style={{float: 'right'}} />
        </div>       
        <Tabela month="7" tableName={tableName}></Tabela>
        
      </>
    );
  }
}
//<Link style={{color: 'red'}} to="/Refap0">Refap0 </Link>
//<div className="bottomMenu" onClick={handleClick}>Menu <Link to="/Refap23">Refap23</Link> <Link to="/Refap0">Refap0</Link> <Link to="/Reduc">Reduc</Link></div> 
export default App;

