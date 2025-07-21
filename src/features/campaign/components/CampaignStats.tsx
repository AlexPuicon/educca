import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Campaign {
  id: string;
  title: string;
  participants: number;
  collected: number;
  hours: number;
}

interface CampaignStatsProps {
  campaigns: Campaign[];
}

const CampaignStats: React.FC<CampaignStatsProps> = ({ campaigns }) => {
  // Calcular totales
  const totalCampaigns = campaigns.length;
  const totalParticipants = campaigns.reduce((sum, campaign) => sum + campaign.participants, 0);
  const totalCollected = campaigns.reduce((sum, campaign) => sum + campaign.collected, 0);
  const totalHours = campaigns.reduce((sum, campaign) => sum + campaign.hours, 0);

  // Datos para gráfico de barras
  const chartData = {
    labels: campaigns.map(campaign => campaign.title),
    datasets: [
      {
        label: 'Participantes',
        data: campaigns.map(campaign => campaign.participants),
        backgroundColor: 'rgba(56, 161, 105, 0.7)',
      },
      {
        label: 'Material Reciclado (kg)',
        data: campaigns.map(campaign => campaign.collected),
        backgroundColor: 'rgba(66, 153, 225, 0.7)',
      },
      {
        label: 'Horas de Trabajo',
        data: campaigns.map(campaign => campaign.hours),
        backgroundColor: 'rgba(247, 144, 9, 0.7)',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Estadísticas de Campañas',
        font: {
          size: 16
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad'
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Estadísticas de Campañas</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
          <h3 className="text-lg font-semibold text-green-800">Total Campañas</h3>
          <p className="text-3xl font-bold text-green-600">{totalCampaigns}</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
          <h3 className="text-lg font-semibold text-blue-800">Total Participantes</h3>
          <p className="text-3xl font-bold text-blue-600">{totalParticipants}</p>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
          <h3 className="text-lg font-semibold text-orange-800">Material Reciclado</h3>
          <p className="text-3xl font-bold text-orange-600">{totalCollected} kg</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
          <h3 className="text-lg font-semibold text-purple-800">Horas de Trabajo</h3>
          <p className="text-3xl font-bold text-purple-600">{totalHours}</p>
        </div>
      </div>
      
      <div className="h-96">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default CampaignStats;