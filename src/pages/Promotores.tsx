import { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Tabs from '../components/common/Tabs';
import Card from '../components/common/Card';


const Promotores = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipo: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tipo: '',
      mensaje: ''
    });
  };

  const promotoresTabs = [
    {
      id: 'pae',
      label: 'Promotores Ambientales Escolares (PAE)',
      content: (
        <div>
          <p className="mb-6">
            Programa dirigido a estudiantes de instituciones educativas que desean convertirse en líderes ambientales 
            dentro de su comunidad escolar.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Instituciones con PAE</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
            ))}
          </div>
          
          <button className="btn-primary">
            Únete al programa PAE
          </button>
        </div>
      ),
    },
    {
      id: 'paj',
      label: 'Promotores Ambientales Juveniles (PAJ)',
      content: (
        <div>
          <p className="mb-6">
            Programa para jóvenes entre 18 y 25 años interesados en liderar proyectos ambientales 
            en sus comunidades.
          </p>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h4 className="font-semibold text-lg mb-2">Próximas actividades:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Taller de liderazgo ambiental - 15 de agosto</li>
              <li>Jornada de reforestación comunitaria - 22 de agosto</li>
              <li>Foro de emprendimientos sostenibles - 5 de septiembre</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'pac',
      label: 'Promotores Ambientales Comunitarios (PAC)',
      content: (
        <div>
          <p className="mb-6">
            Programa para adultos comprometidos con el desarrollo sostenible de sus comunidades.
          </p>
          
          <h3 className="text-xl font-semibold mb-4">Próximas Capacitaciones</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-3 px-4 bg-primary text-white text-left font-semibold">Fecha</th>
                  <th className="py-3 px-4 bg-primary text-white text-left font-semibold">Tema</th>
                  <th className="py-3 px-4 bg-primary text-white text-left font-semibold">Lugar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">10/08/2025</td>
                  <td className="py-3 px-4 border-b border-gray-200">Manejo de residuos sólidos</td>
                  <td className="py-3 px-4 border-b border-gray-200">Centro Comunal de La Joya</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">17/08/2025</td>
                  <td className="py-3 px-4 border-b border-gray-200">Agricultura urbana sostenible</td>
                  <td className="py-3 px-4 border-b border-gray-200">Parque Ecológico Municipal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-200">24/08/2025</td>
                  <td className="py-3 px-4 border-b border-gray-200">Conservación de recursos hídricos</td>
                  <td className="py-3 px-4 border-b border-gray-200">Asoc. de Pescadores</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-200">31/08/2025</td>
                  <td className="py-3 px-4 border-b border-gray-200">Energías renovables en comunidades</td>
                  <td className="py-3 px-4 border-b border-gray-200">Centro Cultural Tambopata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle 
        title="Sé Parte del Cambio: Conviértete en un Promotor Ambiental" 
        subtitle="Únete a nuestra red de agentes de cambio ambiental"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs tabs={promotoresTabs} />
        </div>
        
        <div>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4 text-center">¿Interesado en ser promotor?</h3>
            <p className="text-center mb-6">Completa el formulario y nos pondremos en contacto contigo</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Tipo de promotor</label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="pae">Promotor Ambiental Escolar (PAE)</option>
                  <option value="paj">Promotor Ambiental Juvenil (PAJ)</option>
                  <option value="pac">Promotor Ambiental Comunitario (PAC)</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Mensaje (opcional)</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full btn-primary"
              >
                Enviar Solicitud
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Promotores;