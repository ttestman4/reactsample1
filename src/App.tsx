import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';

import { AppState } from './store';
import { UserState } from './store/user/types';
import { initUser } from './store/user/actions';

import UserCompInterface from './components/user';

interface AppProp {
  initUser: typeof initUser;
  userState: UserState;
}

export type UpdateUserParam = React.SyntheticEvent<{ value: string }>;

class App extends Component<AppProp> {
  state = {
    name: 'User name in component'
  };

  updateUser = (event: UpdateUserParam) => {
    this.setState({ name: event.currentTarget.value });
  };

  init = (name: string) => {
    this.props.initUser({
      name: this.state.name
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p />
        </header>
        <UserCompInterface
          name={this.state.name}
          initUser={this.init}
          updateUser={this.updateUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  userState: state.user
});

const mapDispatchToProps = { initUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
