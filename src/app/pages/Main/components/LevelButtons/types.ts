import { Levels } from "@/app/enums";

export type Props = {
  onClick: (level: Levels) => void;
  selectedLevel?: Levels;
};
