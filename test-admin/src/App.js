// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//
//       return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//
//   }
// }
//
// export default App;


import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import { PostList, PostCreate, PostEdit } from './posts';
import { UserList } from "./users";

import Dashboard from './Dashboard';
import authClient from './authClient';


import PostIcon from 'material-ui/svg-icons/action/book';
import UserIcon from 'material-ui/svg-icons/social/group';

const App = () => (
    <Admin authClient={authClient} dashboard={Dashboard}
           restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={PostIcon}/>
        <Resource name='users' list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;