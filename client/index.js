import React from 'react';
import './style/style.css';
import ReactDOM from 'react-dom';
import SongList from './components/SongList';
import App from './components/App'
import SongCreate from './components/SongCreate'
import ApolloClient from 'apollo-client';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import {ApolloProvider} from 'react-apollo';
import {SongDetails} from './components/SongDetail';
const client = new ApolloClient({
});
const Root = () => {
  return (

   <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={SongList}/>
   
      {/* <Route path="song/new" component={App}> */}
      <Route path="song/new" component={SongCreate}/>
      {/* </Route> */}
      {/* <Route path="song/:id" component={App}> */}
      <Route  path="song/:id" component={SongDetails}/>
      {/* </Route> */}
      </Route>
    </Router>
   </ApolloProvider>

  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);