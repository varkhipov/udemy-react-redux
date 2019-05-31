import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';


// Approach 2 of getting data from the React Context System
// Consumers allows get data from multiple contexts
class Button extends Component {
  renderSubmit(language) {
    return language === 'en' ? 'Submit' : 'Voorleggen';
  }

  renderButton(context) {
    return (
      <button className={'ui button ' + context.color}>
        {this.renderSubmit(context.language)}
      </button>
    )
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {context => this.renderButton(context)}
      </LanguageContext.Consumer>
    );
  }
}

export default Button;
