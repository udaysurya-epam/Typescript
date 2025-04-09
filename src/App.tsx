// App.tsx
import UserDashboard from './Components/UserDashBoard';
import React from 'react';
import UserCard from './Components/UserCard'; // Import the component
import UserCardTool from './Components/UserCardTooling';
import UserCardInterface from './Components/UserCardInterface';
import UserFetcher from './Components/UserFetchInterface';
import { InfoCard } from './Types/InfoCard';
import { Product, UserUnion } from './Types/UserProduct';

function App() {
  // return (
  //   <div>
  //     <h1>UserUnion Cards</h1>

  //     <UserCard name="Alice" age={30} onClick={() => alert("Alice Clicked")} />

  //     {/* <UserCard name="Bob" age="thirty" /> */}
  //   </div>
  // );

  /////////////////////////////////////////////////////////////////////////////
  // return (
  //   <div>
  //     <UserCardTool
  //       age={28} name='uday' onClick={() => alert('Card Clicked!')}
  //     />
  //   </div>
  // )

  ///////////////////////////////////////////////////////////////////////////
  // return (
  //   <div>
  //     <h1>Users List</h1>
  //     <UserFetcher />
  //   </div>
  // );

  /////////////////////////////////////////////////////////////////////////

  // const handleUserClick = (user: UserUnion) => {
  //   alert(`UserUnion clicked: ${user.name}`);
  // };

  // const handleProductClick = (product: Product) => {
  //   alert(`Product clicked: ${product.title}`);
  // };

  // return (
  //   <div style={{ padding: '20px' }}>
  //     <h2>Users</h2>
  //     <InfoCard<UserUnion>
  //       data={{ id: 1, name: 'Alice', role: 'admin', permissions:['read'] }}
  //       onClick={handleUserClick}
  //       render={(user) => (
  //         <>
  //           <h3>{user.name}</h3>
  //           <p>Role: {user.role}</p>
  //         </>
  //       )}
  //     />

  //     <h2>Products</h2>
  //     <InfoCard<Product>
  //       data={{ id: 'p1', title: 'Laptop', price: 999 }}
  //       onClick={handleProductClick}
  //       render={(product) => (
  //         <>
  //           <h3>{product.title}</h3>
  //           <p>Price: ${product.price}</p>
  //         </>
  //       )}
  //     />
  //   </div>
  // );

  //////////////////////////////////////////////////////////////////////////////////////
  // const handleUserClick = (user: UserUnion) => {
  //   alert(`Clicked: ${user.name} (${user.role})`);
  // };

  // const renderUser = (user: UserUnion) => {
  //   switch (user.role) {
  //     case 'admin':
  //       return (
  //         <>
  //           <h3>{user.name}</h3>
  //           <p>Role: {user.role}</p>
  //           <p>Permissions: {user.permissions.join(', ')}</p>
  //         </>
  //       );
  //     case 'editor':
  //       return (
  //         <>
  //           <h3>{user.name}</h3>
  //           <p>Role: {user.role}</p>
  //           <p>Section: {user.section}</p>
  //         </>
  //       );
  //     case 'viewer':
  //       return (
  //         <>
  //           <h3>{user.name}</h3>
  //           <p>Role: {user.role}</p>
  //           <p>Read-only access</p>
  //         </>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  // const users: UserUnion[] = [
  //   { id: 1, name: 'Alice', role: 'admin', permissions: ['manage', 'edit'] },
  //   { id: 2, name: 'Bob', role: 'editor', section: 'Sports' },
  //   { id: 3, name: 'Charlie', role: 'viewer' },
  // ];

  // return (
  //   <div style={{ padding: '20px' }}>
  //     <h2>Role-Based UserUnion Cards</h2>
  //     {users.map((user) => (
  //       <InfoCard<UserUnion>
  //         key={user.id}
  //         data={user}
  //         onClick={handleUserClick}
  //         render={renderUser}
  //       />
  //     ))}
  //   </div>
  // );

  ///////////////////////////////////////////////////////////////////////
  return(
    <div>
      <UserDashboard/>
    </div>
  )

}

export default App;
