import React from 'react';

const Calendar: React.FC = () => {
  const events = [
    { id: 1, day: 10, title: "Taller PAE", type: "taller" },
    { id: 2, day: 12, title: "Campaña Reciclaje", type: "campania" },
    { id: 3, day: 18, title: "Capacitación Docentes", type: "capacitacion" },
    { id: 4, day: 25, title: "Evento Gran Cruzada Verde", type: "evento" },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "taller": return "bg-green-100 border-green-300 text-green-800";
      case "campania": return "bg-blue-100 border-blue-300 text-blue-800";
      case "capacitacion": return "bg-purple-100 border-purple-300 text-purple-800";
      case "evento": return "bg-yellow-100 border-yellow-300 text-yellow-800";
      default: return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
      <p className="text-lg text-gray-700 mb-4 text-center">
        ¡Mantente al día con todas nuestras actividades! Aquí podrás encontrar las fechas de nuestras capacitaciones, campañas, talleres y eventos especiales.
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day, index) => (
            <div key={index} className="text-center font-semibold text-gray-600">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }, (_, i) => {
            const dayNumber = i + 1;
            const dayEvents = events.filter(e => e.day === dayNumber);
            
            return (
              <div 
                key={i} 
                className={`min-h-20 border border-gray-200 p-1 overflow-hidden ${i > 27 ? 'bg-gray-50' : ''}`}
              >
                <div className="text-right text-sm font-semibold">{i < 28 ? dayNumber : ''}</div>
                {dayEvents.map(event => (
                  <div 
                    key={event.id} 
                    className={`text-xs p-1 rounded mt-1 truncate ${getEventColor(event.type)}`}
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-100 border border-green-300 mr-2"></div>
          <span className="text-sm">Talleres</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-100 border border-blue-300 mr-2"></div>
          <span className="text-sm">Campañas</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-100 border border-purple-300 mr-2"></div>
          <span className="text-sm">Capacitaciones</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-yellow-100 border border-yellow-300 mr-2"></div>
          <span className="text-sm">Eventos Especiales</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;