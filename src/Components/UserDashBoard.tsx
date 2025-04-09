import { useState } from 'react';
import React from 'react';

// 1. Interfaces vs Types

  interface BaseUser {
    id: number;
    name: string;
    isActive: boolean;
  }
  
  interface Admin extends BaseUser {
    role: 'admin';
    accessLevel: number;
  }
  
  interface RegularUser extends BaseUser {
    role: 'user';
    department: string;
  }
  
  //2. Discriminated Unions
  type User = Admin | RegularUser;
 
  
  
  // 3. Generics
  function filterActive<T extends { isActive: boolean }>(data: T[]): T[] {
    return data.filter((item) => item.isActive);
  }
  
  // 4. Utility Types
  type UserPreview = Pick<User, 'name' | 'role'>;
  const preview: UserPreview = {
    name: "Alice",
    role: "admin",
  };
  
  console.log("User Preview:", preview);

  // 5. Type Narrowing
  function describeUser(user: User) {
    if (user.role === 'admin') {
      return `Admin: ${user.name}, Access: ${user.accessLevel}`;
    }
    return `User: ${user.name}, Department: ${user.department}`;
  }
  
  // 6. Enums
  enum Theme {
    Light = 'light',
    Dark = 'dark',
  }
  
  // 7. keyof and typeof
  const product = {
    id: 101,
    title: "Wireless Mouse",
    price: 29.99,
    inStock: true,
  };
  
  type Product = typeof product;
  
  type ProductKeys = keyof Product; // "id" | "title" | "price" | "inStock"
  
  function logProductProperty(obj: Product, key: ProductKeys) {
    console.log(`${key}:`, obj[key]);
  }
    logProductProperty(product, "title");   // title: Wireless Mouse
  logProductProperty(product, "price");   // price: 29.99
  
  
  // 8. Type Guards
  function isAdmin(user: User): user is Admin {
    return user.role === 'admin';
  }
  
  // 9. Mapped Types
  type Car = {
    brand: string;
    model: string;
    year: number;
  };
  
  type ReadonlyCar<T> = {
    readonly [K in keyof T]: T[K];
  };
  
  type MyCar = ReadonlyCar<Car>;
  
  const car: MyCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
  };
  
  console.log(car);
  

  // 10. Declaration Merging
  
  window.myCustomProperty = "Hello";
  
  // 11. Custom Type Hook
  
  function useTheme(): [Theme, () => void] {
    const [theme, setTheme] = useState<Theme>(Theme.Light);
    const toggle = () => setTheme((prev) => (prev === Theme.Light ? Theme.Dark : Theme.Light));
    return [theme, toggle];
  }
  
  // 👇 MAIN COMPONENT
  const users: User[] = [
    { id: 1, name: 'Alice', role: 'admin', accessLevel: 5, isActive: true },
    { id: 2, name: 'Bob', role: 'user', department: 'Sales', isActive: false },
    { id: 3, name: 'Charlie', role: 'user', department: 'IT', isActive: true },
  ];
  
  const UserDashboard: React.FC = () => {
    const [theme, toggleTheme] = useTheme();
    const activeUsers = filterActive(users);
  
    return (
      <div style={{ background: theme === Theme.Light ? '#fff' : '#222', color: theme === Theme.Light ? '#000' : '#fff', padding: '2rem' }}>
        <h2>User Dashboard</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        {activeUsers.map((user) => (
          <div key={user.id} style={{ border: '1px solid gray', margin: '1rem', padding: '1rem' }}>
            <strong>{describeUser(user)}</strong>
            {isAdmin(user) && <p>Special Admin Tools Enabled</p>}
          </div>
        ))}
      </div>
    );
  };
  
  export default UserDashboard;
  