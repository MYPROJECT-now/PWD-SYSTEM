// import React, { useEffect, useState } from "react";
// import { Pie } from "react-chartjs-2";
// import { getDisabilityDistribution } from "@/actions/todoAction";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);



// const DisabilityPieChart = () => {
//   const [chartData, setChartData] = useState({
//     labels: [] as string[],
//     datasets: [] as any[],
//   });

//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const disabilityData = await getDisabilityDistribution();
//       const data = [
//         { name: "Deaf/Hard of Hearing", value: disabilityData.deafHardOfHearing as number },
//         { name: "Intellectual Disability", value: disabilityData.intellectualDisability as number },
//         { name: "Learning Disability", value: disabilityData.learningDisability as number },
//         { name: "Mental Disability", value: disabilityData.mentalDisability as number },
//         { name: "Physical Disability", value: disabilityData.physicalDisability as number },
//         { name: "Psychological Disability", value: disabilityData.psychologicalDisability as number },
//         { name: "Speech and Language Impairment", value: disabilityData.speechAndLanguageImpairment as number },
//         { name: "Visual Disability", value: disabilityData.visualDisability as number },
//         { name: "Cancer", value: disabilityData.cancer as number },
//         { name: "Rare Disease", value: disabilityData.rareDisease as number },
//       ];

//       setChartData({
//         labels: data.map((d) => d.name),
//         datasets: [
//           {
//             label: "Disability Distribution",
//             data: data.map((d) => d.value),
//             backgroundColor: [
//               "#FF6384",
//               "#36A2EB",
//               "#FFCE56",
//               "#4BC0C0",
//               "#9966FF",
//               "#FF9F40",
//               "#C9CBCF",
//               "#8E44AD",
//               "#E67E22",
//               "#3498DB",
//             ],
//             hoverOffset: 4,
//           },
//         ],
//       });

//       setChartOptions({
//         responsive: true,
//         plugins: {
//           legend: {
//             position: "right",
//             labels: {
//               boxWidth: 10,
//               boxHeight: 10,
//               font: {
//                 size: 12,
//                 family: "Arial, sans-serif",
//               },
//               padding: 10,
//             },
//           },
//           tooltip: {
//             callbacks: {
//               label: function (context: any) {
//                 const value = context.raw || 0;
//                 return `${context.label}: ${value}`;
//               },
//             },
//           },
//           datalabels: {
//             color: "#fff",
//             font: {
//               size: 12,
//               weight: "bold",
//             },
//             formatter: (value: number) => value, // Display values inside the pie
//           },
//         },
//       });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div
//       className="flex justify-center items-center bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
//       style={{ height: "350px" }} // Limit height to 500px
//     >
//       <div>
//         <h2 className="text-center text-lg font-semibold">
//           Disability Distribution of PWDs
//         </h2>
//         <Pie data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default DisabilityPieChart;



// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { getDisabilityDistribution } from '@/actions/todoAction';

// interface DisabilityData {
//   [key: string]: unknown;
// }

// const DisabilityChart = () => {
//   const [data, setData] = useState<DisabilityData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const disabilityData: DisabilityData = await getDisabilityDistribution();
//       const data: DisabilityData[] = Object.keys(disabilityData).map((key) => ({
//         name: key,
//         value: disabilityData[key],
//       }));
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658', '#8dd1e1'];

//   return (
//     <div className="w-[500px] h-[270px] bg-white rounded-md">
//       <h2 className="text-center text-lg font-semibold">Disability Distribution of PWDs</h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <PieChart margin={{ top: 20, right: 30, left: 40, bottom: 50 }}>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             labelLine={false}
//             outerRadius={90}
//             fill="#8884d8"
//             dataKey="value"
//             nameKey="name"
//           >
//             {data.map((entry: DisabilityData, index: number) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend
//             layout="vertical"
//             align="right"
//             verticalAlign="middle"
//             iconSize={10}
//             wrapperStyle={{
//               fontSize: '12px',
//               width: '30%',
//             }}
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default DisabilityChart;


// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const DisabilityPieChart = () => {
//   // Sample data: adjust it with your actual disability data
//   const data = [
//     { name: 'Deaf/Hard of Hearing', value: 10 },
//     { name: 'Intellectual Disability', value: 15 },
//     { name: 'Learning Disability', value: 8 },
//     { name: 'Mental Disability', value: 12 },
//     { name: 'Physical Disability', value: 20 },
//     { name: 'Psychological Disability', value: 5 },
//     { name: 'Speech and Language Impairment', value: 6 },
//     { name: 'Visual Disability', value: 10 },
//     { name: 'Cancer', value: 3 },
//     { name: 'Rare Disease', value: 0},
//   ];

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658', '#8dd1e1'];

//   return (
//     <div className="w-[500px] h-[270px] bg-white rounded-md"> 
//     <h2 className="text-center text-lg font-semibold">Disability Distribution of PWDs</h2>
//     <ResponsiveContainer width="100%" height="100%">
//     <PieChart width={200} height={50} margin={{ top: 20, right: 30, left: 40, bottom:50 }}>
//       <Pie
//         data={data}
//         cx="35%"
//         cy="50%"
//         labelLine={false}
//         outerRadius={90}
//         fill="#8884d8"
//         dataKey="value"
//         nameKey="name"
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       <Tooltip />
//       <Legend
//         layout="vertical"
//         align="right"
//         verticalAlign="middle"
//         iconSize={10}   // Make the legend icons smaller
//         wrapperStyle={{
//           fontSize: '12px', // Adjust font size for legend text
//           width: '30%',     // Make the legend area narrower
//         }}
//       />
//     </PieChart>
//     </ResponsiveContainer>
//     </div>
//   );
// };

// export default DisabilityPieChart;

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { getDisabilityDistribution } from "@/actions/todoAction";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  TooltipItem,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
}

const DisabilityPieChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [],
        hoverOffset: 0,
      },
    ],
  });

  const [chartOptions] = useState<ChartOptions<"pie">>({
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          font: {
            size: 12,
            family: "Arial, sans-serif",
          },
          padding: 3,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<"pie">) {
            const value = context.raw || 0;
            return `${context.label}: ${value}`;
          },
        },
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const disabilityData = await getDisabilityDistribution();
      const data = [
        { name: "Deaf/Hard of Hearing", value: disabilityData.deafHardOfHearing as number },
        { name: "Intellectual Disability", value: disabilityData.intellectualDisability as number },
        { name: "Learning Disability", value: disabilityData.learningDisability as number },
        { name: "Mental Disability", value: disabilityData.mentalDisability as number },
        { name: "Physical Disability", value: disabilityData.physicalDisability as number },
        { name: "Psychological Disability", value: disabilityData.psychologicalDisability as number },
        { name: "Speech and Language Impairment", value: disabilityData.speechAndLanguageImpairment as number },
        { name: "Visual Disability", value: disabilityData.visualDisability as number },
        { name: "Cancer", value: disabilityData.cancer as number },
        { name: "Rare Disease", value: disabilityData.rareDisease as number },
      ];

      setChartData({
        labels: data.map((d) => d.name),
        datasets: [
          {
            label: "Disability Distribution",
            data: data.map((d) => d.value),
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#C9CBCF",
              "#8E44AD",
              "#E67E22",
              "#3498DB",
            ],
            hoverOffset: 4,
          },
        ],
      });
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex justify-center items-center bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      style={{ height: "270px" }} // Limit height to 500px
    >
      <div>
        <h2 className="text-center text-lg font-semibold mt-[45px]"
        style={{ marginBottom: -25 }}>
          Disability Distribution of PWDs
        </h2>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DisabilityPieChart;
