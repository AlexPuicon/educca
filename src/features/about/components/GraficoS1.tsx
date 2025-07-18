import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  type ChartOptions
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartDataItem {
  label: string;
  meta: number;
  achieved: number;
  women: number | null;
  men: number | null;
}

interface GraficoS1Props {
  data: ChartDataItem[];
}

const GraficoS1: React.FC<GraficoS1Props> = ({ data }) => {
  const labels = data.map(item => item.label);
  
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Meta 2025',
        data: data.map(item => item.meta),
        backgroundColor: 'rgba(66, 153, 225, 0.7)',
        borderColor: 'rgba(66, 153, 225, 1)',
        borderWidth: 1,
      },
      {
        label: 'Conseguido (Total)',
        data: data.map(item => item.achieved),
        backgroundColor: 'rgba(56, 161, 105, 0.7)',
        borderColor: 'rgba(56, 161, 105, 1)',
        borderWidth: 1,
      },
      {
        label: 'Mujeres',
        data: data.map(item => item.women || 0),
        backgroundColor: 'rgba(237, 100, 166, 0.7)',
        borderColor: 'rgba(237, 100, 166, 1)',
        borderWidth: 1,
        hidden: data.every(item => item.women === null),
      },
      {
        label: 'Varones',
        data: data.map(item => item.men || 0),
        backgroundColor: 'rgba(49, 130, 206, 0.7)',
        borderColor: 'rgba(49, 130, 206, 1)',
        borderWidth: 1,
        hidden: data.every(item => item.men === null),
      },
    ],
  };

  // Opciones corregidas con tipos específicos
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cantidad',
          font: {
            size: 14,
            weight: 'bold' as const, // Tipo específico
          },
        },
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          }
        }
      },
    },
  };

  return (
    <div className="h-[400px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default GraficoS1;