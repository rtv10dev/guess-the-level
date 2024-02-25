import { Props } from "./types";

const Button = (props: Props) => {
  const { level, selectedLevel, classes, onClick } = props;

  return (
    <button
      disabled={!!selectedLevel}
      onClick={() => onClick(level)}
      className={`px-3.5 py-1 text-4xl font-semibold rounded hover:opacity-100 cursor-pointer	max-sm:text-3xl max-sm:max-w-[72px] max-sm:place-self-center ${classes} ${
        selectedLevel === level ? "opacity-100" : "opacity-55"
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
