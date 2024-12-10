import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './Components/Pricing/Pricing';
import Features from './Components/Features/Features';
import Courses from './Components/Courses/Courses';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path= '/' element={<Home/>}/>
        <Route  path= '/courses' element={<Courses/>}/>
        <Route  path= '/features' element={<Features/>}/>
        <Route  path= '/pricing' element={<Pricing/>}/>
        <Route  path= '/about' element={<About/>}/>
        <Route  path= '/blog' element={<Blogs/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
