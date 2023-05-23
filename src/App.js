import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import './components/style.css'
import Signin from './components/Signin';
import WhoAreWe from './components/WhoAre';



function App() {
  return (<><Navbar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/whoarewe' element={<WhoAreWe />} />
      </Routes>
    </div>
  </>
  )
}

export default App;
