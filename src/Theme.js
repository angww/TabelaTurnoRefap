import React from "react";
import classNames from "classnames";
import { trackUser, trackEvent } from "./analytics";

//const handleClickTheme = () =>  { alert('a'); }

class BtnChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    
    let localTheme = window.localStorage.getItem('AppTheme');
    localTheme = (localTheme==null) ? "" : localTheme;

    this.state = {
      AppTheme: localTheme
    };
  }

  handleClickTheme() {
    if (this.state.AppTheme == "") {
      this.setState(
        {
          AppTheme: "themeBlack"
        },
        function() {
          document.body.classList.add("themeBlack");
          window.localStorage.setItem('AppTheme', 'themeBlack');
        }
      );
    } else {
      this.setState(
        {
          AppTheme: ""
        },
        function() {
          document.body.classList.remove("themeBlack");
          window.localStorage.setItem('AppTheme', '');
        }
      );
    }
    //this.VerifyAppTheme(this.state.AppTheme);
  }

  render() {
    const themeWhite = this.state.AppTheme == "";
    const txtThemeToChange = themeWhite ? "escuro" : "claro";
    //this.VerifyAppTheme(themeWhite);

    return (
      <div
        className={this.props.className}
        onClick={this.handleClickTheme.bind(this)}
      >
        Tema {txtThemeToChange}
      </div>
    );
  }
}

export default BtnChangeTheme;
