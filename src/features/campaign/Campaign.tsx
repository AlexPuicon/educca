import React, { useState } from 'react';
import CampaignHeader from './components/CampaignHeader';
import CampaignForm from './components/CampaignForm';
import CampaignStats from './components/CampaignStats';
import CampaignCard from './components/CampaignCard';

const Campaign: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'form' | 'stats'>('gallery');
  const [campaigns, setCampaigns] = useState([
    {
      id: '1',
      title: 'Campaña de Reciclaje Julio 2025',
      date: '27/06/2025',
      description: 'Campaña Ecotrueque para la recolección de residuos reciclables',
      folder: '27062025',
      photos: ['foto01.png', 'foto02.png', 'foto03.png'],
      participants: 150,
      collected: 450,
      hours: 80
    },
    {
      id: '2',
      title: 'Taller de Educación Ambiental',
      date: '15/08/2025',
      description: 'Taller para docentes sobre educación ambiental',
      folder: '15082025',
      photos: ['foto01.png', 'foto02.png', 'foto03.png'],
      participants: 75,
      collected: 120,
      hours: 40
    }
  ]);

  const addCampaign = (newCampaign: any) => {
    setCampaigns([...campaigns, {...newCampaign, id: Date.now().toString()}]);
    setActiveTab('gallery');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CampaignHeader />
      
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'gallery' 
              ? 'text-green-600 border-b-2 border-green-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('gallery')}
        >
          Galería de Campañas
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'form' 
              ? 'text-green-600 border-b-2 border-green-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('form')}
        >
          Agregar Nueva Campaña
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'stats' 
              ? 'text-green-600 border-b-2 border-green-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('stats')}
        >
          Estadísticas
        </button>
      </div>

      {activeTab === 'gallery' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      )}

      {activeTab === 'form' && <CampaignForm onSubmit={addCampaign} />}
      
      {activeTab === 'stats' && <CampaignStats campaigns={campaigns} />}
    </div>
  );
};

export default Campaign;