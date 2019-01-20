import React, { Component } from 'react';
import { UpdateUserParam } from '../App';

interface UserProps {
  name: string;
  initUser: (name: string) => void;
  updateUser: (event: UpdateUserParam) => void;
}

const UserCompInterface: React.SFC<UserProps> = ({
  name,
  initUser,
  updateUser
}) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === 'Enter') {
      init();
    }
  }
  function init() {
    initUser(name);
  }
  return (
    <div>
      <input value={name} onChange={updateUser} />
      <button onClick={init}>Init User</button>
    </div>
  );
};

export default UserCompInterface;
