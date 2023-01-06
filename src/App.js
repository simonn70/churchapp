import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contactUs/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Event from './components/events/Event';
import Carousel from './components/carousel/Carousel.js';



function App() {
  return (

     
      <BrowserRouter>
      <div className="app">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
       </Routes>
       
       <Routes>
        <Route path='/about' element={<About/>}/>
       </Routes>
       <Routes>
        <Route path='/events' element={<Event/>}/>
       </Routes>
       <Routes>
        <Route path='/contactus' element={<Contact/>}/>
       </Routes>
       <Footer/>
      </div>
      </BrowserRouter>
      
    
  );
}

export default App;
