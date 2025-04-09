import React, { useState } from 'react';

// 🔐 Define prop types
type UserCardProps = {
  name: string;
  age: number;
  onClick?: () => void;
};

const UserCard: React.FC<UserCardProps> = ({ name, age, onClick }) => {
    const [count, setCount] = useState<number>(0);
setCount(5);
// setCount("five"); 
  return (
    <div onClick={onClick}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
