import React from 'react';
import { User } from '../Types/types';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div>
    <h3>{user.name}</h3>
    <p>Email: {user.email}</p>
  </div>
);

export default UserCard;
