import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';


// Approach 1 of getting data from the React Context System
// 'this.context' allows get data from single context
class Field extends Component {
  // 'contextType' is a reserved prop name
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'en' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
