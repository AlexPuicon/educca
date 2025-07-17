import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/acerca-de', label: 'Acerca de EDUCCA' },
    { href: '/promotores-ambientales', label: 'Promotores Ambientales' },
    { href: '/campanias-eventos', label: 'Campañas y Eventos' },
    { href: '/espacios-educativos', label: 'Espacios Educativos' },
    { href: '/recursos', label: 'Recursos' },
    { href: '/galeria', label: 'Galería' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <span className="ml-3 text-xl font-bold text-primary">EDUCCA</span>
              </NavLink>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                to={item.href}
                className={({ isActive }) => 
                  `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                    isActive 
                      ? 'text-white bg-primary' 
                      : 'text-gray-700 hover:text-white hover:bg-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-primary focus:outline-none transition duration-300"
            >
              <span className="sr-only">Menú principal</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink 
                key={item.href} 
                to={item.href}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                    isActive 
                      ? 'text-white bg-primary' 
                      : 'text-gray-700 hover:text-white hover:bg-primary'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;