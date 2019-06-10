import React, { Component } from 'react';

class SearchBar extends Component {
  state = { searchString: '' };

  onInputChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchString);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search video:</label>
            <input type="text"
                   placeholder="Type search string..."
                   value={this.state.searchString}
                   onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
