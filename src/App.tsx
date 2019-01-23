import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';

import { AppState } from './store';
import { UserState } from './user/store/types';
import { initUser, fetchUser } from './user/store/actions';

import UserCompInterface from './user/components/user';

interface AppProp {
  initUser: typeof initUser;
  fetchUser: typeof fetchUser;
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

  fetchUser = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <div className="App">
        <UserCompInterface
          name={this.state.name}
          initUser={this.init}
          updateUser={this.updateUser}
          fetchUser={this.fetchUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  userState: state.user
});

const mapDispatchToProps = { initUser, fetchUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
