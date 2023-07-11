import React from 'react';

const userContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      <p>hello there, {user?.name?.toUpperCase()}</p>
      <button className="btn" onClick={logout}>
        logout
      </button>
    </div>
  );
};

export default userContainer;
