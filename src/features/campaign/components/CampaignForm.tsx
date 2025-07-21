import React, { useState } from 'react';

interface CampaignFormProps {
  onSubmit: (campaign: any) => void;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [folder, setFolder] = useState('');
  const [photos, setPhotos] = useState<string[]>([]);
  const [newPhoto, setNewPhoto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCampaign = {
      title,
      date,
      description,
      folder,
      photos,
      participants: 0,
      collected: 0,
      hours: 0
    };
    
    onSubmit(newCampaign);
    
    // Reset form
    setTitle('');
    setDate('');
    setDescription('');
    setFolder('');
    setPhotos([]);
  };

  const addPhoto = () => {
    if (newPhoto.trim() !== '') {
      setPhotos([...photos, newPhoto]);
      setNewPhoto('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Registrar Nueva Campaña</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Título de la Campaña</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            placeholder="Ej: Campaña de Reciclaje Julio 2025"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Fecha</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nombre de Carpeta</label>
            <input
              type="text"
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
              placeholder="Ej: 21072025"
            />
            <p className="text-sm text-gray-500 mt-1">
              Esta carpeta debe existir en public/campaign/ con las fotos
            </p>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
            placeholder="Describe los objetivos y actividades de la campaña..."
          ></textarea>
        </div>
        
        <div>
          <label className="block text-gray-700 font-medium mb-2">Fotos</label>
          <div className="flex">
            <input
              type="text"
              value={newPhoto}
              onChange={(e) => setNewPhoto(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nombre del archivo (ej: foto01.png)"
            />
            <button
              type="button"
              onClick={addPhoto}
              className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition"
            >
              Agregar
            </button>
          </div>
          
          {photos.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Fotos agregadas:</h4>
              <div className="flex flex-wrap gap-2">
                {photos.map((photo, index) => (
                  <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center">
                    {photo}
                    <button
                      type="button"
                      onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Registrar Campaña
          </button>
        </div>
      </form>
    </div>
  );
};

export default CampaignForm;