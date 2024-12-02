

import './App.css';
import Forms from './Forms';
import Tables from './Tables';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Tables/>}/>
    <Route path='/forms' element={<Forms/>}/>
    
     
    </Routes>
    
    </>
  );
}

export default App;
