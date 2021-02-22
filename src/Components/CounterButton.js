import React from 'react';

class CounterButton extends React.Component {
  // console.log('counter button!!!!', color);
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  updateCount = () => {
    this.setState(state => ({count: state.count + 1}));
  }

  render() {
    return (
      <button
        id='counter'
        color={this.props.color}
        onClick={() => this.updateCount()}
      >
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
