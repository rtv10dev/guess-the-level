"use client";

import useSWRImmutable from "swr/immutable";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "@/app/components/Spinner";
import LevelButtons from "./components/LevelButtons";
import { Levels } from "@/app/enums";
import WordInfo from "./components/WordInfo";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default () => {
  const { data, error, isLoading } = useSWRImmutable("/api/words", fetcher);
  const [selectedLevel, setSelectedLevel] = useState<Levels>();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  if (error) return <div>Something went wrong</div>;
  if (isLoading)
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <Spinner></Spinner>
      </div>
    );
  if (!data) return <div>Something went wrong</div>;

  const onClick = (level: Levels) => {
    setSelectedLevel(level);

    if (level == data[currentWordIndex].CEFR) {
      toast.success("Nice!", { duration: 2500, icon: "💯" });
    } else {
      toast.error(
        <span>
          Error! The correct level is <b>{data[currentWordIndex].CEFR}</b>
        </span>,
        { duration: 2500 }
      );
    }
    setTimeout(() => {
      setCurrentWordIndex(currentWordIndex + 1);
      setSelectedLevel(undefined);
    }, 3000);
  };

  return (
    <main className="h-screen flex flex-col justify-evenly">
      <WordInfo
        word={data[currentWordIndex].headword}
        type={data[currentWordIndex].pos}
      ></WordInfo>

      <LevelButtons
        onClick={onClick}
        selectedLevel={selectedLevel}
      ></LevelButtons>
    </main>
  );
};
