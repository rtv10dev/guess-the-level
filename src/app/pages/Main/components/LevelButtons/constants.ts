import { Levels } from "@/app/enums";

type Level = { level: Levels; color: string };

export const levelButtons: Level[] = [
  { level: Levels.A1, color: "bg-green-300" },
  { level: Levels.A2, color: "bg-blue-300" },
  { level: Levels.B1, color: "bg-yellow-300" },
  { level: Levels.B2, color: "bg-orange-300" },
  { level: Levels.C1, color: "bg-pink-300" },
  { level: Levels.C2, color: "bg-red-300" },
];
