import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import Searchbox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

function App (props) {
  const {
    searchField,
    onSearchChange,
    onRequestRobots,
    robots,
    isPending,
    error
  } = props;

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  });

  return isPending ?
    <h1>Loading...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <Searchbox searchChange={onSearchChange}/>
        <ErrorBoundry>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </ErrorBoundry>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
