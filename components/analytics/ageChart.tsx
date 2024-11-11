import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getAgeGroupDistribution } from "@/actions/todoAction";

type AgeGroupData = {
  name: string;
  count: number;
};

const AgeDistributionChart = () => {
  const [data, setData] = useState<AgeGroupData[]>([]);  // Apply AgeGroupData[] type to data

  useEffect(() => {
    const fetchData = async () => {
      const ageData = await getAgeGroupDistribution();
      setData([
        { name: "Children (0-12)", count: ageData.children as number },
        { name: "Teen (13-19)", count: ageData.teens as number },
        { name: "Adult (20-59)", count: ageData.adults as number },
        { name: "Elderly (60+)", count: ageData.elderly as number },
      ]);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[500px] h-[300px] bg-white rounded-md"> 
    <h2 className="text-center text-lg font-semibold">Age Distribution of PWDs</h2>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
        dataKey="name" 
        label={{ value: "Age Group", position: "insideBottom", offset: -5 }} 
        style={{ fontSize: '10px' }} 
        />
        <YAxis 
        label={{ value: "Number of PWDs", angle: -90, position: "insideLeft", textanchor: "center", dy:35, dx:10}} 
        style={{ fontSize: '10px' }} 
        
        />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" name="Count" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default AgeDistributionChart;
