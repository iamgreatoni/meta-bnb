import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Places from './screens/Places';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/place' element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
