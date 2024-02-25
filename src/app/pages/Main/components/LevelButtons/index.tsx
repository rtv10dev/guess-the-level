import { levelButtons } from "./constants";
import Button from "@/app/components/Button";
import { Props } from "./types";

const LevelButtons = (props: Props) => {
  const { onClick, selectedLevel } = props;
  const levels = levelButtons;

  return (
    <div className="flex justify-center gap-3 max-sm:grid	max-sm:grid-cols-2	">
      {levels.map(({ level, color }) => (
        <Button
          key={level}
          selectedLevel={selectedLevel}
          classes={color}
          onClick={() => onClick(level)}
          level={level}
        >
          {level}
        </Button>
      ))}
    </div>
  );
};

export default LevelButtons;
