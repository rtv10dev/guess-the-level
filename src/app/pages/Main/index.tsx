'use client';

import Spinner from '@/app/components/Spinner';
import { Levels } from '@/app/enums';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import useSWRImmutable from 'swr/immutable';
import LevelButtons from './components/LevelButtons';
import WordInfo from './components/WordInfo';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Main = () => {
  const { data, error, isLoading } = useSWRImmutable('/api/words', fetcher);
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

    if (level == data[currentWordIndex].level) {
      toast.success('Nice!', { duration: 2500, icon: '💯' });
    } else {
      toast.error(
        <span>
          Error! The correct level is <b>{data[currentWordIndex].level}</b>
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
    <main className="h-screen flex flex-col justify-evenly px-2">
      <WordInfo
        key={data[currentWordIndex].word + data[currentWordIndex].pos}
        word={data[currentWordIndex].word}
        type={data[currentWordIndex].pos}
        desc={data[currentWordIndex].desc}
      ></WordInfo>

      <LevelButtons
        onClick={onClick}
        selectedLevel={selectedLevel}
      ></LevelButtons>
    </main>
  );
};

export default Main;
