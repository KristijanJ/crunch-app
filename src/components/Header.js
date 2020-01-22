// PACKAGES
import React, { Component } from "react";
import { Link } from "react-router-dom";

// STYLES
import "../assets/styles/global.css";
import "../assets/styles/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "", toggleSearch: false };
  }

  handleOnChange = e => this.setState({ input: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.replace(this.state.input);
    this.setState({ input: "", toggleSearch: false });
  };

  toggleSearch = () => this.setState({ toggleSearch: !this.state.toggleSearch });
  
  goBack = () => this.props.history.goBack();

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="fas fa-home"></i>
            <span>Crunch App</span>
          </Link>
          <div className="search_user">
            {this.props.type === "home" ? (
              <>
                <i className="fas fa-search search" onClick={this.toggleSearch}></i>
                <form
                  onSubmit={this.handleSubmit}
                  className={this.state.toggleSearch ? "open" : ""}
                >
                  <input
                    type="text"
                    onChange={this.handleOnChange}
                    value={this.state.input}
                    className={this.state.toggleSearch ? "open" : ""}
                  />
                </form>
              </>
            ) : (
              <i className="fas fa-chevron-circle-left back" onClick={this.goBack}></i>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
