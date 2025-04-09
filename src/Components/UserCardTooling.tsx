import React from 'react';

interface UserCardProps {
  /** Full name of the user */
  name: string;
  /** Age of the user (in years) */
  age: number;
  /** Callback when user card is clicked */
  onClick?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, onClick }) => {
  return (
    <div onClick={onClick} style={{ border: '1px solid gray', padding: '1rem', margin: '1rem 0' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
