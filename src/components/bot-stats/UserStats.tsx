
import React from "react";
import { BotStatistics } from "./types";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { generateUserData } from "./data-utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

interface UserStatsProps {
  stats: BotStatistics;
  period: "day" | "week" | "month" | "year";
}

const UserStats: React.FC<UserStatsProps> = ({ stats, period }) => {
  // Generate user data based on the selected period
  const data = generateUserData(period, stats.platform);
  
  return (
    <div className="h-80 w-full">
      <ChartContainer
        config={{
          active: { color: "#10b981" },
          new: { color: "#6366f1" },
        }}
      >
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="active" 
            name="Active Users"
            stroke="#10b981" 
            activeDot={{ r: 8 }} 
          />
          <Line 
            type="monotone" 
            dataKey="new" 
            name="New Users"
            stroke="#6366f1" 
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default UserStats;
