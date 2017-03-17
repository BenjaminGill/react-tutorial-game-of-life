import React from 'react';
import Header from './Header.jsx';
import BoardControls from './BoardControls.jsx';
import BoardRenderer from './BoardRenderer.jsx';

const App = () => (
  <div>
    <Header />
    <div>
      <BoardControls />
      <BoardRenderer />
    </div>
  </div>
);

export default App;

