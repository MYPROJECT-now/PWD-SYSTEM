// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { getDisabilityDistribution } from '@/actions/todoAction';

// interface DisabilityData {
//   name: string;
//   value: number;
// }

// const DisabilityPieChart = () => {
//   const [data, setData] = useState<DisabilityData[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const disabilityData = await getDisabilityDistribution();
//       setData([
//         { name: 'Deaf/Hard of Hearing', value: disabilityData.deafHardOfHearing as number},
//         { name: 'Intellectual Disability', value: disabilityData.intellectualDisability as number},
//         { name: 'Learning Disability', value: disabilityData.learningDisability as number},
//         { name: 'Mental Disability', value: disabilityData.mentalDisability as number},
//         { name: 'Physical Disability', value: disabilityData.physicalDisability as number},
//         { name: 'Psychological Disability', value: disabilityData.psychologicalDisability as number},
//         { name: 'Speech and Language Impairment', value: disabilityData.speechAndLanguageImpairment as number,},
//         { name: 'Visual Disability', value: disabilityData.visualDisability as number},
//         { name: 'Cancer', value: disabilityData.cancer as number},
//         { name: 'Rare Disease', value: disabilityData.rareDisease as number},
//       ]);
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
//             {data.map((entry, index) => (
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

// }  

// export default DisabilityPieChart;


import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DisabilityPieChart = () => {
  // Sample data: adjust it with your actual disability data
  const data = [
    { name: 'Deaf/Hard of Hearing', value: 10 },
    { name: 'Intellectual Disability', value: 15 },
    { name: 'Learning Disability', value: 8 },
    { name: 'Mental Disability', value: 12 },
    { name: 'Physical Disability', value: 20 },
    { name: 'Psychological Disability', value: 5 },
    { name: 'Speech and Language Impairment', value: 6 },
    { name: 'Visual Disability', value: 10 },
    { name: 'Cancer', value: 3 },
    { name: 'Rare Disease', value: 0},
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658', '#8dd1e1'];

  return (
    <div className="w-[500px] h-[270px] bg-white rounded-md"> 
    <h2 className="text-center text-lg font-semibold">Disability Distribution of PWDs</h2>
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={200} height={50} margin={{ top: 20, right: 30, left: 40, bottom:50 }}>
      <Pie
        data={data}
        cx="35%"
        cy="50%"
        labelLine={false}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
        nameKey="name"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend
        layout="vertical"
        align="right"
        verticalAlign="middle"
        iconSize={10}   // Make the legend icons smaller
        wrapperStyle={{
          fontSize: '12px', // Adjust font size for legend text
          width: '30%',     // Make the legend area narrower
        }}
      />
    </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default DisabilityPieChart;
