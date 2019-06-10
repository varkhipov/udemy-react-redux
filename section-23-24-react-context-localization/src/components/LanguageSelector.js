import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  // 'contextType' is a reserved prop name
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.context.onLanguageChange('en')} />
        <i className="flag nl" onClick={() => this.context.onLanguageChange('nl')} />
      </div>
    );
  }
}

export default LanguageSelector;
