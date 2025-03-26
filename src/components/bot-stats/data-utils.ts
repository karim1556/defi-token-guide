
import { BotStatistics } from "./types";

export function generateTimeData(period: "day" | "week" | "month" | "year") {
  const data = [];
  
  switch (period) {
    case "day":
      // Generate hourly data for a day
      for (let i = 0; i < 24; i++) {
        data.push({
          name: `${i}:00`,
          telegram: Math.floor(Math.random() * 50) + 10,
          discord: Math.floor(Math.random() * 40) + 5,
        });
      }
      break;
    case "week":
      // Generate daily data for a week
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      for (let i = 0; i < 7; i++) {
        data.push({
          name: days[i],
          telegram: Math.floor(Math.random() * 300) + 50,
          discord: Math.floor(Math.random() * 250) + 40,
        });
      }
      break;
    case "month":
      // Generate data for each day of the month
      for (let i = 1; i <= 30; i++) {
        data.push({
          name: `${i}`,
          telegram: Math.floor(Math.random() * 500) + 100,
          discord: Math.floor(Math.random() * 400) + 80,
        });
      }
      break;
    case "year":
      // Generate monthly data for a year
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for (let i = 0; i < 12; i++) {
        data.push({
          name: months[i],
          telegram: Math.floor(Math.random() * 5000) + 1000,
          discord: Math.floor(Math.random() * 4000) + 800,
        });
      }
      break;
  }
  
  return data;
}

export function generateUserData(period: "day" | "week" | "month" | "year", platform: "telegram" | "discord") {
  const data = [];
  const baseActive = platform === "telegram" ? 200 : 150;
  const baseNew = platform === "telegram" ? 50 : 40;
  
  switch (period) {
    case "day":
      // Generate hourly data for a day
      for (let i = 0; i < 24; i++) {
        data.push({
          name: `${i}:00`,
          active: Math.floor(Math.random() * (baseActive / 10)) + baseActive / 5,
          new: Math.floor(Math.random() * (baseNew / 10)) + baseNew / 20,
        });
      }
      break;
    case "week":
      // Generate daily data for a week
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      for (let i = 0; i < 7; i++) {
        data.push({
          name: days[i],
          active: Math.floor(Math.random() * (baseActive / 2)) + baseActive / 2,
          new: Math.floor(Math.random() * (baseNew / 2)) + baseNew / 4,
        });
      }
      break;
    case "month":
      // Generate weekly data for a month
      for (let i = 1; i <= 4; i++) {
        data.push({
          name: `Week ${i}`,
          active: Math.floor(Math.random() * baseActive) + baseActive,
          new: Math.floor(Math.random() * baseNew) + baseNew / 2,
        });
      }
      break;
    case "year":
      // Generate monthly data for a year
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      for (let i = 0; i < 12; i++) {
        data.push({
          name: months[i],
          active: Math.floor(Math.random() * (baseActive * 2)) + baseActive * 2,
          new: Math.floor(Math.random() * baseNew * 2) + baseNew,
        });
      }
      break;
  }
  
  return data;
}
