import React from 'react';
import { Home } from './views/Home.js';
import { Contact } from './views/Contact.js';
import { StackNavigator } from 'react-navigation';

const MyRoutes = StackNavigator ({
  HomeRT: {
    screen: Home
  },
  ContactRT:{
    screen: Contact
  },
},
{
  initialRouteName: 'HomeRT'
}
);

export default class App extends React.Component{
  render() {
    return (
      <MyRoutes />
    );
  }
}
