import './App.css';

//! 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//! Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';
import { Info } from './pages/Info';
import { NotFound } from './pages/NotFound';
import { Search } from './pages/Search';

//! components
import { Navbar } from './components/Navbar';
import { SearchForm } from './components/SearchForm';

function App() {
  return (      
    <div className="App">
      <h1>React Router</h1> {/* Repete em todas páginas pq está fora do Routes  */}
      <BrowserRouter>

        <Navbar/>{/* Ela se repete, mas tem que estar dentro do BrowserRouter pq ela tem elementos do react-router */ }

        {/* 9 - Search */}
        <SearchForm/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>

          {/* Rota dinamica */}
          <Route path="/products/:id" element={<Product/>}></Route>

          {/* 6 - Nested route */}
          <Route path="/products/:id/info" element={<Info/>}></Route>

          {/* 9 - Search */}
          <Route path="/search" element={<Search/>}></Route>

          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about"/>}></Route>

          {/* 7 - no match route, Rota 404 */}
          <Route path='*' element={<NotFound/>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
