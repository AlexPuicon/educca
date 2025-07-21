import React from 'react';

const CampaignHeader: React.FC = () => {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-4xl font-bold text-green-800 mb-3">Campañas y Eventos EDUCCA</h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Registro fotográfico y documentación de todas las actividades realizadas en el marco 
        del Programa de Educación, Cultura y Ciudadanía Ambiental
      </p>
      <div className="mt-4 flex justify-center">
        <div className="w-24 h-1 bg-green-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default CampaignHeader;