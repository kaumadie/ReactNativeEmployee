import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyDwndgbrRWlqtKel-jKesk8LHaaaPIJJiY',
      authDomain: 'manager-3e5ba.firebaseapp.com',
      databaseURL: 'https://manager-3e5ba.firebaseio.com',
      projectId: 'manager-3e5ba',
      storageBucket: 'manager-3e5ba.appspot.com',
      messagingSenderId: '1078740833078'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;