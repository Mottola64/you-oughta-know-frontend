import React from 'react';
import {connect} from 'react-redux';
import TopicsContainer from './containers/TopicsContainer'

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <TopicsContainer />
      </div>
    );
  }
}

export default connect()(App);
