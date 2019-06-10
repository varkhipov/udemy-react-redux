import React, { Component } from 'react';
import { LANGUAGE_COLOR } from '../constants/LanguageColor';

// 'React.createContext()' may also accept an object or an array.
// The name must begin from the capital letter because React processes elements named in lower-case
// like a plain HTML elements, not like React Components.
const Context = React.createContext('en');

export class LanguageStore extends Component {
  state = { language: 'en', color: LANGUAGE_COLOR['en'] };

  onLanguageChange = language => {
    this.setState({
      language: language,
      color: LANGUAGE_COLOR[language]
    })
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
