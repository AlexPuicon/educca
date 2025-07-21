//import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Programa EDUCCA</h3>
            <p className="text-sm">
              Municipalidad Provincial de Tambopata<br />
              Madre de Dios, Perú
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic">
              <p>Av. Leon Velarde, Puerto Maldonado</p>
              <p className="mt-2">Teléfono: (123) 456-7890</p>
              <p className="mt-2">Email: info@educatambopata.gob.pe</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
            <p className="mt-2">Sábados: 9:00 AM - 1:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MPTambopata" className="hover:text-green-300 transition duration-300">
                <span className="sr-only">Facebook</span>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
              </a>
              <a href="www.instagram.com/mptambopata/#" className="hover:text-green-300 transition duration-300">
                <span className="sr-only">TikTok</span>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
              </a>
              <a href="www.instagram.com/mptambopata/" className="hover:text-green-300 transition duration-300">
                <span className="sr-only">Instagram</span>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/@mptambopata" className="hover:text-green-300 transition duration-300">
                <span className="sr-only">YouTube</span>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Programa Municipal EDUCCA - Tambopata. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;