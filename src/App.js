import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Services from './Screens/Services';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Services/>}/>


     </Routes>
    </div>
  );
}

export default App;
