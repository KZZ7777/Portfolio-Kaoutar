import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Blog from './components/Blog';
import MyBlog from './components/MyBlog';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LenisScroll from './components/LenisScroll';

export default function App() {
  return (
    <Router>
      <LenisScroll />
      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Header />
              
              <Blog /> {/* Alleen op homepage */}
              <About />
            </>
          }
        />

        {/* Blog pagina */}
        <Route path="/myblog" element={<MyBlog />} />
      </Routes>

      <Footer />
    </Router>
  );
}
