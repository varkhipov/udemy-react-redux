import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../actions';

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null
    }

    return <div className="header">{user.name}</div>
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  console.log(ownProps);
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

function mapDispatchToProps() {
  return { fetchUser }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(UserHeader);
