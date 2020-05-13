import React from 'react';
import UserItems from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  //   margin: '1rem',
};

const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
