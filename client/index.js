import React from 'react';
import ReactDOM from 'react-dom';
import SongList from './components/songList';
import App from './components/app'
import SongCreate from './components/SongCreate'
import ApolloClient, { ApolloError } from 'apollo-client';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import {ApolloProvider} from 'react-apollo';
const client = new ApolloClient({
});
const Root = () => {
  return (

   <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={SongList}/>
      </Route>
      <Route path="song/new" component={SongCreate}>
      <IndexRoute component={SongCreate}/>
      </Route>
    </Router>
   </ApolloProvider>

  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
