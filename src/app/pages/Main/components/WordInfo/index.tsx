import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';
import './style.css';
import { Props } from './types';

const WordInfo = (props: Props) => {
  const { word, type, desc } = props;

  useEffect(() => {
    setTimeout(() => {
      const item = document.querySelectorAll('.text')[0];
      if (item) {
        item.classList.remove('whitespace-nowrap');
        item.classList.remove('whitespace-normal');
      }
    }, 2000);
  }, [word]);

  return (
    <div className="flex flex-col justify-self-center items-center break-all">
      <h1
        className="text-6xl font-semibold text-white max-sm:text-3xl text whitespace-nowrap break-normal"
        data-tooltip-id="tooltip"
        data-tooltip-content={`${desc[0].toUpperCase()}${desc
          .slice(1)
          .toLowerCase()}`}
      >
        <span className="border-bottom-dotted">{`${word[0].toUpperCase()}${word.slice(
          1
        )}`}</span>
      </h1>
      <span className="text-4xl text-white max-sm:text-2xl">as</span>
      <h1 className="text-6xl font-semibold text-white capitalize max-sm:text-3xl text whitespace-nowrap">
        {type}
      </h1>
      <Tooltip id="tooltip" className="tooltip"></Tooltip>
    </div>
  );
};

export default WordInfo;
