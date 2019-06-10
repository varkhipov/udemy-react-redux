import React, { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { LANGUAGE_COLOR } from '../constants/LanguageColor';


class App extends Component {
  state = { language: 'en', color: LANGUAGE_COLOR['en'] };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <UserCreate />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
