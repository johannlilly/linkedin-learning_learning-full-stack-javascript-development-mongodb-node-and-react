import React from 'react';
import Header from './Header';

/// This is referred to as a "stateless" component because we can't use the React state with these components. If a component does not need `state`, this is the best way to define the component.
const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests" />
      <div>
        ...
      </div>
    </div>
  );
};

export default App;
