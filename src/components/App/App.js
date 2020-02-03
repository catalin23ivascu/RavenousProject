import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Yelp from '../../util/Yelp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businessesArray: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businessesArray) => {
      this.setState({ businessesArray: businessesArray });
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businessesArray} />
      </div>
    );
  }
}

export default App;
