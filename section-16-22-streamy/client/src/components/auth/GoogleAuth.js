import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';


class GoogleAuth extends Component {
  componentDidMount() {
    this.some()
  }

  some() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '248566965208-nkejrm5ck9famlfk3mqelu6edq15fu7q.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());

        // https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleauthissignedinlistenlistener
        // A function that takes a boolean value.
        // listen() passes true to this function when the user signs in, and false when the user signs out.
        this.auth.isSignedIn.listen(
          this.onAuthChange
        );
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }
    else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign out
        </button>
      )
    }
    else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign in with Google
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  }
}

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
