import { Link } from 'react-router-dom';
import HeroVideo from '../../shared/components/HeroVideo';
import SectionTitle from '../../shared/components/SectionTitle';
import Card from '../../shared/components/Card';

const Home = () => {
  const quickLinks = [
    {
      title: 'Conoce Nuestras Campañas',
      description: 'Descubre nuestras campañas activas y cómo participar.',
      icon: 'campaign',
      link: '/campanias-eventos',
    },
    {
      title: 'Sé un Promotor Ambiental',
      description: 'Únete a nuestro equipo de promotores ambientales.',
      icon: 'group',
      link: '/promotores-ambientales',
    },
    {
      title: 'Últimas Noticias',
      description: 'Mantente informado con nuestras últimas noticias.',
      icon: 'article',
      link: '/noticias',
    },
    {
      title: 'Nuestro Impacto',
      description: 'Conoce los logros y resultados de nuestro programa.',
      icon: 'trending_up',
      link: '/acerca-de',
    },
  ];

  return (
    <div>
      <HeroVideo />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle title="Acceso Rápido" subtitle="Encuentra rápidamente lo que buscas" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {quickLinks.map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="p-6 hover:bg-green-50 transition duration-300">
                  <div className="text-center">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;