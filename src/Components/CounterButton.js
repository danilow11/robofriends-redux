import React, { useState } from 'react';

const CounterButton = React.memo(({ color }) => {
  console.log('counter button!!!!', color);

  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(prevState => (prevState + 1));
  }

  return <button color={color} onClick={updateCount}>Count: {count}</button>;
});

export default CounterButton;
