import Card from "../../shared/components/Card";
import SectionTitle from "../../shared/components/SectionTitle";
import Tabs from "../../shared/components/Tabs";


const About = () => {
  const tabs = [
    {
      id: 'escolar',
      label: 'Educación Ambiental Escolar',
      content: (
        <div>
          <p className="mb-4">
            Programa dirigido a instituciones educativas para integrar la educación ambiental en el currículo escolar
            y promover prácticas sostenibles.
          </p>
          <h3 className="text-xl font-semibold mb-4">Logros 2025</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-primary text-white text-left font-semibold">Indicador</th>
                  <th className="py-3 px-4 bg-primary text-white text-left font-semibold">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">PAE formados</td>
                  <td className="py-3 px-4 border-b border-gray-200">120</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">Docentes capacitados</td>
                  <td className="py-3 px-4 border-b border-gray-200">350</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">Eventos realizados</td>
                  <td className="py-3 px-4 border-b border-gray-200">25</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">Escuelas participantes</td>
                  <td className="py-3 px-4 border-b border-gray-200">42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'comunitaria',
      label: 'Educación Ambiental Comunitaria',
      content: (
        <div>
          <p className="mb-4">
            Iniciativas para involucrar a la comunidad en la protección ambiental a través de talleres,
            proyectos y actividades participativas.
          </p>
          <h3 className="text-xl font-semibold mb-4">Proyectos Clave</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Programa de reciclaje comunitario</li>
            <li>Huertos urbanos sostenibles</li>
            <li>Campañas de limpieza de ríos</li>
            <li>Talleres de manejo de residuos sólidos</li>
            <li>Capacitaciones en agricultura ecológica</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Nuestro Compromiso con la Sostenibilidad de Tambopata"
        subtitle="Conoce nuestra misión, visión y líneas de acción"
      />

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p>
                Promover una cultura ambiental sostenible en Tambopata a través de la educación,
                participación ciudadana y gestión de proyectos ambientales.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p>
                Ser el referente en educación ambiental a nivel regional, logrando una ciudadanía
                comprometida con el desarrollo sostenible de Tambopata.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Objetivos 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">Capacitación</h3>
            <p>Capacitar a 500 docentes en educación ambiental</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">Promotores</h3>
            <p>Formar 200 promotores ambientales escolares y comunitarios</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">Eventos</h3>
            <p>Realizar 50 eventos de sensibilización ambiental</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold mb-2">Espacios</h3>
            <p>Implementar 10 espacios educativos ambientales</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Líneas de Acción</h2>
        <Tabs tabs={tabs} />
      </section>
    </div>
  );
};

export default About;
