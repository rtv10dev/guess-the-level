import { Levels } from "@/app/enums";
import { ReactNode } from "react";

export type Props = {
  classes?: string;
  level: Levels;
  onClick: (level: Levels) => void;
  selectedLevel?: Levels;
  children: ReactNode;
};
