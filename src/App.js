import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
