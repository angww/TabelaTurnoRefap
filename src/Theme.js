import React from "react";
import classNames from "classnames";
import { trackUser, trackEvent } from "./analytics";

//const handleClickTheme = () =>  { alert('a'); }

class BtnChangeTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AppTheme: ""
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
        }
      );
    } else {
      this.setState(
        {
          AppTheme: ""
        },
        function() {
          document.body.classList.remove("themeBlack");
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
