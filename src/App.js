
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Navbar className='navbar'></Navbar>

    <Routes>
        <Route path='/' element={<Hero></Hero>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>

    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
