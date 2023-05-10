import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Site/Home/Home';
import About from './pages/Site/About/About';
import Service from './pages/Site/Service/Service';
import Roadmap from './pages/Site/Roadmap/Roadmap';
import Team from './pages/Site/Team/Team';
import Contact from './pages/Site/Contact/Contact';
import Header from './Layout/Site/Header/Header';
import NotFound from './pages/Site/NotFound/NotFound';
import Footer from './Layout/Site/Footer/Footer';
import Dashboard from './pages/Admin/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Header/> 
    
  <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/roadmap" element={<Roadmap/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>

    <Route path='/admin' element={<Dashboard/>}/>

    </Routes>
      <Footer/> 

    </BrowserRouter>
  );
}

export default App;
