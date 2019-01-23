import React, { Component } from 'react';
import { UpdateUserParam } from '../../App';

interface UserProps {
  name: string;
  initUser: (name: string) => void;
  fetchUser: () => void;
  updateUser: (event: UpdateUserParam) => void;
}

const UserCompInterface: React.SFC<UserProps> = ({
  name,
  initUser,
  updateUser,
  fetchUser
}) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === 'Enter') {
      init();
    }
  }
  function init() {
    initUser(name);
  }
  function fetchData() {
    fetchUser();
  }
  return (
    <div>
      <input value={name} onChange={updateUser} />
      <button onClick={init}>Init User</button>
      <button onClick={fetchData}>Fetch User</button>
    </div>
  );
};

export default UserCompInterface;
