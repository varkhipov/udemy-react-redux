import React, { Component } from 'react';

class SearchBar extends Component {
  state = { searchString: '' };

  // onInputChange(e) {
  //   Object.entries(e).forEach((entry) => console.log(entry));
  // }

  // Arrow function could be used to handle 'this' correctly via automatic binding
  // onFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.searchString);
  // };

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.searchString);
  };

  render() {
    // Arrow function in 'onSubmit' could be used to handle 'this' correctly via automatic binding
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={ (e) => this.onFormSubmit(e) }>
          <div className="field">
            <label htmlFor="search">Image Search:</label>
            <input id="search"
                   placeholder="Search something..."
                   type="text"
                   value={ this.state.searchString }
                   onChange={ e => this.setState({ searchString: e.target.value }) }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
