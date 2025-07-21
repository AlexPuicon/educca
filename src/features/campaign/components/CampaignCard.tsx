import React from 'react';
import CampaignGallery from './CampaignGallery';

interface Campaign {
  id: string;
  title: string;
  date: string;
  description: string;
  folder: string;
  photos: string[];
  participants: number;
  collected: number;
  hours: number;
}

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        {campaign.photos.length > 0 ? (
          <img 
            src={`/campaign/${campaign.folder}/${campaign.photos[0]}`} 
            alt={campaign.title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center">
            <span className="text-gray-500">Sin imágenes</span>
          </div>
        )}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {campaign.date}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{campaign.title}</h3>
        <p className="text-gray-600 mb-4">{campaign.description}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{campaign.participants}</div>
            <div className="text-xs text-gray-500">Participantes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{campaign.collected} kg</div>
            <div className="text-xs text-gray-500">Reciclado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{campaign.hours}</div>
            <div className="text-xs text-gray-500">Horas</div>
          </div>
        </div>
        
        <CampaignGallery folder={campaign.folder} photos={campaign.photos} />
      </div>
    </div>
  );
};

export default CampaignCard;