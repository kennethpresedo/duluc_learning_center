import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'
import App from './pages/App/App';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Services from './pages/Services/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}>
                    </Route>
                    <Route path='/about' element={<About />}>
                    </Route>
                    <Route path='/contact' element={<Contact />}>
                    </Route>
                    <Route path='/services' element={<Services />}>
                    </Route>
                </Routes>
            </BrowserRouter>
  </React.StrictMode>

);
