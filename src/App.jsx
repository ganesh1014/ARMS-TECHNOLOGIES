// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <h1 className="text-5xl font-bold text-white">
//         Hello Tailwind! 🚀
//       </h1>
//       </div>
//     </>
//   )
// }

// export default App









// src/App.jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import { Home, FlaskConical, Phone, Info } from 'lucide-react';

// ---------- Import all your pages ----------
import HomePage from './pages/Home';
import CategoryGridPage from './pages/CategoryGrid';
import ProductsPage from './pages/Products';        // Your existing Products page
import ProductDetailPage from './pages/ProductDetail';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';

function App() {
  return (
    <BrowserRouter>
      {/* ---------- NAVIGATION BAR ---------- */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm px-6 py-4 flex justify-center gap-8 items-center flex-wrap">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          <Home size={18} /> Home
        </NavLink>
        
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          <FlaskConical size={18} /> Products
        </NavLink>
        
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          <Phone size={18} /> Contact
        </NavLink>
        
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500'
            }`
          }
        >
          <Info size={18} /> About Us
        </NavLink>
      </nav>

      {/* ---------- ROUTES ---------- */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Products - Category Grid (all 5 categories) */}
          <Route path="/products" element={<CategoryGridPage />} />

          {/* Products - Specific Category (your existing Products page) */}
          <Route path="/products/:categoryName" element={<ProductsPage />} />

          {/* Products - Specific Product Detail */}
          <Route path="/products/:categoryName/:productName" element={<ProductDetailPage />} />

          {/* Contact & About */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
