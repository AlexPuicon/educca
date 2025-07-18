import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface BudgetItem {
  label: string;
  value: number;
}

interface GraficoS2Props {
  data: BudgetItem[];
  total: number;
}

const GraficoS2: React.FC<GraficoS2Props> = ({ data, total }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: [
          'rgba(56, 161, 105, 0.7)',
          'rgba(66, 153, 225, 0.7)',
          'rgba(237, 100, 166, 0.7)',
          'rgba(255, 193, 7, 0.7)',
          'rgba(108, 117, 125, 0.7)'
        ],
        borderColor: [
          'rgba(56, 161, 105, 1)',
          'rgba(66, 153, 225, 1)',
          'rgba(237, 100, 166, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(108, 117, 125, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 12,
          },
          generateLabels: (chart: any) => {
            const datasets = chart.data.datasets;
            return chart.data.labels.map((label: string, i: number) => {
              const value = datasets[0].data[i];
              const percentage = Math.round((value / total) * 100);
              return {
                text: `${label}: S/ ${value.toLocaleString()} (${percentage}%)`,
                fillStyle: datasets[0].backgroundColor[i],
                strokeStyle: datasets[0].borderColor[i],
                lineWidth: 1,
                hidden: false,
                index: i
              };
            });
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = Math.round((value / total) * 100);
            return `${label}: S/ ${value.toLocaleString()} (${percentage}%)`;
          }
        }
      },
    },
  };

  return (
    <div className="h-[400px]">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default GraficoS2;