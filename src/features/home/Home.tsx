import { Link } from 'react-router-dom';
import HeroVideo from '../../shared/components/HeroVideo';
import SectionTitle from '../../shared/components/SectionTitle';
import Card from '../../shared/components/Card';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

const Home = () => {
  const quickLinks = [
    {
      title: 'Campañas Activas',
      description: 'Participa en nuestras acciones ecológicas.',
      icon: 'campaign',
      link: '/campanias-eventos',
    },
    {
      title: 'Promotores Ambientales',
      description: 'Conviértete en agente de cambio en tu comunidad.',
      icon: 'groups',
      link: '/promotores-ambientales',
    },
    {
      title: 'Noticias EDUCCA',
      description: 'Conoce nuestras últimas actividades y logros.',
      icon: 'article',
      link: '/noticias',
    },
    {
      title: 'Impacto Social',
      description: 'Resultados y beneficios del programa en Tambopata.',
      icon: 'insights',
      link: '/acerca-de',
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white text-gray-800">
      <HeroVideo />

      <div className='max-w-[1425px] mx-auto'>
        <Section1 />
        <Section2 />
        <Section3 />

        {/* Acceso Rápido */}
        <section className="py-20 bg-gradient-to-b from-green-100 to-green-200">
          <div className="container mx-auto px-4">
            <SectionTitle title="Acceso Rápido" subtitle="Explora nuestras iniciativas principales" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {quickLinks.map((item, index) => (
                <Link key={index} to={item.link}>
                  <Card className="p-6 text-center bg-white rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1">
                    <div className="flex items-center justify-center mb-4">
                      <span className="material-icons text-green-600 text-4xl">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-green-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nuestro Impacto */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle title="Nuestro Impacto" subtitle="Resultados tangibles para un futuro sostenible" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-12">
              <div>
                <span className="material-icons text-green-600 text-5xl">campaign</span>
                <h3 className="text-5xl font-bold text-green-700 mt-3">+120</h3>
                <p className="text-gray-600 mt-2">Campañas realizadas</p>
              </div>
              <div>
                <span className="material-icons text-green-600 text-5xl">groups</span>
                <h3 className="text-5xl font-bold text-green-700 mt-3">+500</h3>
                <p className="text-gray-600 mt-2">Promotores activos</p>
              </div>
              <div>
                <span className="material-icons text-green-600 text-5xl">emoji_people</span>
                <h3 className="text-5xl font-bold text-green-700 mt-3">+10K</h3>
                <p className="text-gray-600 mt-2">Ciudadanos sensibilizados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Historias EDUCCA */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <SectionTitle title="Historias EDUCCA" subtitle="Voces que transforman" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
              <Card className="p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src="https://cdn.www.gob.pe/uploads/document/file/8126181/1175925-ecotrueque05.png"
                    alt="Ana testimonio"
                    className="w-full object-cover h-64"
                  />
                  <div className="absolute bottom-0 bg-black/50 w-full text-white p-4">
                    <p className="italic">
                      “Ser promotora ambiental me permitió conectar con mi comunidad y generar conciencia.”
                    </p>
                    <p className="mt-2 font-semibold">– Ana, Tambopata</p>
                  </div>
                </div>
              </Card>
              <Card className="p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src="https://cdn.www.gob.pe/uploads/document/file/8126181/1175925-ecotrueque05.png"
                    alt="Carlos testimonio"
                    className="w-full object-cover h-64"
                  />
                  <div className="absolute bottom-0 bg-black/50 w-full text-white p-4">
                    <p className="italic">
                      “Participar en EDUCCA fue una experiencia transformadora para mi familia y barrio.”
                    </p>
                    <p className="mt-2 font-semibold">– Carlos, Madre de Dios</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-green-600 to-green-500 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">¿Quieres ser parte del cambio?</h2>
            <p className="mb-8 text-xl max-w-2xl mx-auto">
              Súmate como voluntario o promotor ambiental y transforma tu entorno con EDUCCA.
            </p>
            <Link to="/registro">
              <span className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
                Únete a EDUCCA
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
