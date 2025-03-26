
import React from "react";
import { BotStatistics } from "./types";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { generateTimeData } from "./data-utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface UsageOverTimeProps {
  telegramStats: BotStatistics;
  discordStats: BotStatistics;
  period: "day" | "week" | "month" | "year";
}

const UsageOverTime: React.FC<UsageOverTimeProps> = ({ telegramStats, discordStats, period }) => {
  // Generate time-based data based on the selected period
  const data = generateTimeData(period);
  
  return (
    <div className="h-80 w-full">
      <ChartContainer
        config={{
          telegram: { color: "#38bdf8" },
          discord: { color: "#818cf8" },
        }}
      >
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="telegramGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="discordGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area 
            type="monotone" 
            dataKey="telegram" 
            name="Telegram"
            stroke="#38bdf8" 
            fillOpacity={1} 
            fill="url(#telegramGradient)" 
          />
          <Area 
            type="monotone" 
            dataKey="discord" 
            name="Discord"
            stroke="#818cf8" 
            fillOpacity={1} 
            fill="url(#discordGradient)" 
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
};

export default UsageOverTime;
