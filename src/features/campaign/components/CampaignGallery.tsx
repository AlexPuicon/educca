import React from 'react';

interface CampaignGalleryProps {
  folder: string;
  photos: string[];
}

const CampaignGallery: React.FC<CampaignGalleryProps> = ({ folder, photos }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Galería de Fotos</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
            <img 
              src={`/campaign/${folder}/${photo}`} 
              alt={`Foto ${index + 1} de la campaña`}
              className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium">Foto {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignGallery;