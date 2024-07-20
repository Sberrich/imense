import React from 'react';
import Sidbar from './components/Sidbar';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="h-screen w-full flex text-gray-400">
    
        <Sidbar/>
        <div className="flex-1 p-4">
      <Navbar/>

      </div>
      <Main/>
    </div>
  );
}

export default App;
