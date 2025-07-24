import Card from "../../shared/components/Card";
import SectionTitle from "../../shared/components/SectionTitle";
import Tabs from "../../shared/components/Tabs";
import GraficoS1 from "./components/GraficoS1"; 
import GraficoS2 from "./components/GraficoS2";


const About = () => {
  const tabs = [
    {
      id: 'escolar',
      label: 'Educación Ambiental Escolar',
      content: (
        <div>
          <p className="mb-4">
            orienta a construccion eculturas y modos de vida sostenibles en el ámbito formal, a travéz de la formación de Promotores Ambientales Escolares (PAE).
          </p>
          <h3 className="text-xl font-semibold mb-4">Formación de promotores ambientales escolares - PAE</h3>
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
                  <td className="py-3 px-4 border-b border-gray-200">338</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">Docentes capacitados</td>
                  <td className="py-3 px-4 border-b border-gray-200">20</td>
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
            Promueve valores ambientales para mejorar la calidad de vida de las personas, a través del diseño e implementación de espacios públicos que educan ambientalmente:
          </p>
          <h3 className="text-xl font-semibold mb-4">Actividades</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Diseño e implementación de espacios públicos que educan ambientalmente</li>
            <li>Diseño e implementación de campañas informativas y eventos</li>
            <li>Formación de promotores ambientales juveniles - PAJ</li>
            <li>Formación de promotores ambientales comunitarios - PAC</li>
          </ul>
        </div>
      ),
    },
  ];

    const chartData = [
    {
      label: "Docentes Capacitados",
      meta: 500,
      achieved: 75,
      women: 47,
      men: 28
    },
    {
      label: "Promotores Escolares (PAE)",
      meta: 200,
      achieved: 338,
      women: 197,
      men: 141
    },
    {
      label: "Promotores Juveniles (PAJ)",
      meta: 20,
      achieved: 27,
      women: 19,
      men: 8
    },
    {
      label: "Promotores Comunitarios (PAC)",
      meta: 20,
      achieved: 20,
      women: 14,
      men: 6
    },
    {
      label: "Eventos Sensibilización",
      meta: 50,
      achieved: 25,
      women: null,
      men: null
    },
    {
      label: "Espacios Educativos",
      meta: 10,
      achieved: 12,
      women: null,
      men: null
    },
    {
      label: "Personas en Campañas",
      meta: 200,
      achieved: 445,
      women: null,
      men: null
    }
  ];
    // Datos para el gráfico de presupuesto
  const budgetData = [
    { label: 'Formación PAE', value: 36693 },
    { label: 'Espacios Públicos', value: 28781 },
    { label: 'Campañas Informativas', value: 107805 },
    { label: 'Formación PAJ', value: 1914 },
    { label: 'Formación PAC', value: 3694 }
  ];
  
  const budgetTotal = 178887;

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

      <section className="mb-12">
        <SectionTitle title="Nuestros Objetivos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-700 mb-3">Objetivo General</h3>
            <p className="text-gray-700">
              Promover la conciencia ambiental y la participación activa de la población para impulsar una gestión sostenible de residuos y recursos, contribuyendo a comunidades sostenibles lideradas por la Municipalidad Provincial de Tambopata.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Objetivos Específicos</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Incrementar la participación ciudadana en la conservación de la biodiversidad y la segregación de residuos.</li>
                  <li>Implementar medidas de protección ambiental a través de proyectos de reforestación y mejora en la gestión de residuos sólidos.</li>
                  <li>Realizar capacitaciones, talleres y eventos para sensibilizar a la comunidad sobre la protección de la biodiversidad y la mejora de la calidad ambiental.</li>
              </ul>
          </div>
        </div>
        
        {/* New Section: Metas y Avance */}
        <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow-md border-l-4 border-gray-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Metas 2025 y Avance Actual</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A continuación, presentamos nuestras metas para el año 2025 y el progreso que hemos logrado hasta la fecha en cada una de ellas.
          </p>
          <GraficoS1 data={chartData} />
          <p className="text-sm text-gray-600 mt-4 text-center">
            *Nota: Los porcentajes de avance superiores al 100% indican que ya se ha superado la meta establecida para el año 2025 en esa categoría. Los datos de "Mujeres" y "Varones" se muestran cuando están disponibles para la categoría "Conseguido".
          </p>
        </div>

      </section>
      <section className="mb-12">
        <SectionTitle title="Retos Ambientales y Áreas de Acción" />
        <p className="text-lg text-gray-700 mb-6">
          Tambopata enfrenta desafíos ambientales cruciales que requieren nuestra atención y acción inmediata para asegurar un futuro sostenible:
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 section-title">Retos Ambientales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Pérdida de diversidad biológica</h3>
            <p className="text-gray-700">La deforestación, la expansión de actividades ilegales y la degradación de ecosistemas están causando una alarmante disminución de nuestra biodiversidad, amenazando especies locales y servicios ecosistémicos vitales.</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Deterioro de la Calidad Ambiental</h3>
            <p className="text-gray-700">La contaminación del agua, el manejo inadecuado de residuos sólidos y la emisión de gases contaminantes afectan la salud de la población y los ecosistemas, aumentando nuestra vulnerabilidad ante el cambio climático.</p>
          </Card>
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 section-title p-6">Áreas Claves de Acción</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Conservación de la biodiversidad y los ecosistemas</h3>
            <p className="text-gray-700">Promovemos la protección y restauración de ecosistemas, reforestación y prevención de la degradación de hábitats para mantener el equilibrio natural de nuestra región.</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
            </div>            
            <h3 className="text-2xl font-semibold mb-2">Gestión Integral de Residuos Sólidos</h3>
            <p className="text-gray-700">Desarrollamos sistemas eficaces de segregación y recolección para minimizar el impacto ambiental, mejorar la calidad del agua y promover una economía circular sostenible.</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition duration-300">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
            </div>            
            <h3 className="text-2xl font-semibold mb-2">Sensibilización y Educación Ambiental</h3>
            <p className="text-gray-700">Fomentamos la conciencia y participación ciudadana a través de campañas masivas, capacitaciones y talleres que empoderan a la comunidad para adoptar prácticas ecoamigables.</p>
          </Card>
          
          </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="overflow-x-auto rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-16 after:h-1 after:bg-green-600 after:rounded-full">
                Presupuesto del Programa 2025
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Para el año 2025, el Programa EDUCCA cuenta con un presupuesto total de <strong className="text-green-600">S/ 178,887.00</strong>. Este monto es crucial para la ejecución de todas las actividades planificadas y para alcanzar nuestras metas de impacto ambiental.
                </p>
                <div className="overflow-x-auto rounded-lg shadow-md">
                  {/* ... tabla de presupuesto ... */}
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Línea de Acción / Concepto</th>
                        <th className="py-3 px-6 text-right">Costo (S/)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left font-semibold text-green-700">Línea de acción 1: Educación ambiental escolar</td>
                        <td className="py-3 px-6 text-right font-semibold text-green-700"></td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left pl-10">1.1 Formación de promotores ambientales escolares</td>
                        <td className="py-3 px-6 text-right">36,693.00</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100 bg-gray-50">
                        <td className="py-3 px-6 text-left font-bold">SUB TOTAL LÍNEA 1</td>
                        <td className="py-3 px-6 text-right font-bold">36,693.00</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left font-semibold text-blue-700">Línea de acción 2: Educación ambiental comunitaria</td>
                        <td className="py-3 px-6 text-right font-semibold text-blue-700"></td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left pl-10">2.1 Diseño e implementación de espacios públicos que educan ambientalmente</td>
                        <td className="py-3 px-6 text-right">28,781.00</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left pl-10">2.2 Diseño e implementación de campañas informativas y eventos</td>
                        <td className="py-3 px-6 text-right">107,805.00</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left pl-10">2.3 Formación de promotores ambientales juveniles</td>
                        <td className="py-3 px-6 text-right">1,914.00</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left pl-10">2.4 Formación de promotores ambientales comunitarios</td>
                        <td className="py-3 px-6 text-right">3,694.00</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-100 bg-gray-50">
                        <td className="py-3 px-6 text-left font-bold">SUB TOTAL LÍNEA 2</td>
                        <td className="py-3 px-6 text-right font-bold">142,194.00</td>
                      </tr>
                      <tr className="bg-green-600 text-white font-bold">
                        <td className="py-3 px-6 text-left text-lg">TOTAL GENERAL</td>
                        <td className="py-3 px-6 text-right text-lg">178,887.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>          
                
              </div>
                <GraficoS2 data={budgetData} total={budgetTotal} />
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
