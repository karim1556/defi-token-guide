
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BotStatistics } from "./types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

interface CommandStatsProps {
  telegramStats: BotStatistics;
  discordStats: BotStatistics;
  period: "day" | "week" | "month" | "year";
}

const CommandStats: React.FC<CommandStatsProps> = ({ telegramStats, discordStats, period }) => {
  // Combine command stats from both platforms
  const commandStats = [
    {
      name: "create",
      count: telegramStats.commandUsage.create + discordStats.commandUsage.create,
      change: 12.5,  // Mocked change percentage
    },
    {
      name: "stats",
      count: telegramStats.commandUsage.stats + discordStats.commandUsage.stats,
      change: 28.3,  // Mocked change percentage
    },
    {
      name: "help",
      count: telegramStats.commandUsage.help + discordStats.commandUsage.help,
      change: -5.2,  // Mocked change percentage
    },
  ].sort((a, b) => b.count - a.count);  // Sort by count in descending order

  return (
    <Card>
      <CardHeader>
        <CardTitle>Command Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Command</TableHead>
              <TableHead>Count</TableHead>
              <TableHead>Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {commandStats.map((command) => (
              <TableRow key={command.name}>
                <TableCell>
                  <Badge variant="outline" className="capitalize">/{command.name}</Badge>
                </TableCell>
                <TableCell>{command.count.toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {command.change === 0 ? (
                      <Minus className="mr-1 h-4 w-4 text-muted-foreground" />
                    ) : command.change > 0 ? (
                      <ArrowUp className="mr-1 h-4 w-4 text-solana-green" />
                    ) : (
                      <ArrowDown className="mr-1 h-4 w-4 text-destructive" />
                    )}
                    <span className={command.change > 0 ? "text-solana-green" : command.change < 0 ? "text-destructive" : "text-muted-foreground"}>
                      {Math.abs(command.change)}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CommandStats;
