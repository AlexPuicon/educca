import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Acerca de EDUCCA' },
  {
    label: 'Promotores',
    children: [
      { href: '/promotors', label: 'Promotores Ambientales' },
      { href: '/promotores-voluntarios', label: 'Voluntarios' },
    ],
  },
  {
    label: 'Contenido',
    children: [
      { href: '/campanias-eventos', label: 'Campañas y Eventos' },
      { href: '/espacios-educativos', label: 'Espacios Educativos' },
      { href: '/recursos', label: 'Recursos' },
      { href: '/galeria', label: 'Galería' },
      { href: '/noticias', label: 'Noticias' },
    ],
  },
  { href: '/contacto', label: 'Contacto' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-green-700 text-white shadow-md">
      <div className="max-w-[1425px] mx-auto">
        <div className="flex justify-between h-[80px] items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo EDUCCA" className="h-[60px] w-auto mr-3" />
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <span className="px-3 py-2 text-sm font-medium cursor-pointer border-b-2 border-transparent group-hover:border-yellow-300 group-hover:text-yellow-300 transition">
                    {item.label}
                  </span>
                  <div className="absolute left-0 mt-2 w-48 bg-green-800 shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50">
                    {item.children.map((subItem) => (
                      <NavLink
                        key={subItem.href}
                        to={subItem.href}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm hover:bg-green-900 transition ${isActive ? 'text-yellow-300' : 'text-white'
                          }`
                        }
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition border-b-2 border-transparent duration-300 ${isActive
                      ? 'text-yellow-400 border-yellow-400'
                      : 'hover:text-yellow-300 hover:border-yellow-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-primary/80 transition"
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4 space-y-2">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <span className="block text-white font-semibold py-2">{item.label}</span>
                <div className="ml-4 space-y-1">
                  {item.children.map((subItem) => (
                    <NavLink
                      key={subItem.href}
                      to={subItem.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm transition duration-300 ${isActive
                          ? 'bg-green-900 text-yellow-300'
                          : 'hover:bg-green-900 hover:text-yellow-300 text-white'
                        }`
                      }
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive
                    ? 'bg-green-900 text-yellow-300'
                    : 'hover:bg-green-900 hover:text-yellow-300 text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
