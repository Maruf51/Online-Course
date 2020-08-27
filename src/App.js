import React from 'react';
import './App.css';
import Coursedetail from './Components/Coursedetail/Coursedetail';

function App() {
  return (
    <div>
    {/* text-center is a Bootstrap Class. there is more Bootstrap Class in other Components */}
      <h1 className="text-center head-text">Online Course</h1>
      <Coursedetail></Coursedetail>
    </div>
  );
}

export default App;
