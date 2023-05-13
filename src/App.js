import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Information from './components/Information';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>}/>
      <Route path='/information' element={<Information/>}/>
      </Routes>
      <div>
        footer
      </div>
    </Router>
  );
}

export default App;
