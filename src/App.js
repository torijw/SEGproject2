import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/Home';
import Explore from './components/Explore';
import Review from './components/Review';
import Footer from './components/common/Footer';

function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/review" element={<Review/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
