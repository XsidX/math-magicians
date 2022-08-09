import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from './UI/Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    prevTotal: null,
    prevNext: null,
    prevOp: null,
    equalsClicked: false,
    isAC: false,
  });

  const btnFn = [
    'AC',
    '+/-',
    '%',
    '÷',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    'exp',
    0,
    '.',
    '=',
  ];

  const exp = <FontAwesomeIcon icon={solid('expand')} />;
  // prettier-ignore
  const isOperator = (btn) => btn === '+' || btn === '-' || btn === 'x' || btn === '÷' || btn === '=' || btn === '%' || btn === 'AC' || btn === '+/-' || btn === 'exp';
  const isExp = (btn) => btn === 'exp';
  const isEquals = (btn) => btn === '=';

  const buttonChangeHandler = (e) => {
    const buttonName = e.target.innerText;
    const {
      total,
      next,
      operation,
      prevTotal,
      prevNext,
      prevOp,
      equalsClicked,
    } = calculate(state, buttonName);
    const isAC = e.target.innerText === 'AC';

    setState({
      total,
      next,
      operation,
      prevTotal,
      prevNext,
      prevOp,
      equalsClicked,
      isAC,
    });
  };

  const {
    total,
    next,
    operation,
    prevTotal,
    prevNext,
    prevOp,
    equalsClicked,
    isAC,
  } = state;

  // retain the previous calculations/expression when equals is clicked
  // prettier-ignore
  const flag = equalsClicked && `${prevTotal || ''}${prevOp || ''}${prevNext || ''}`;

  return (
    <div className="h-full w-full grid grid-rows-12 sm:h-2/3 sm:w-1/2">
      <div className="relative bg-black mx-5 border-b border-neutral-700 row-span-6 sm:row-span-3">
        <div className="absolute right-0 bottom-3 md:bottom-1 text-gray-100 text-right flex flex-col gap-3 sm:gap-1 ">
          <span
            className={`${
              equalsClicked
                ? 'text-slate-200 text-3xl sm:text-xl'
                : 'text-5xl sm:text-3xl'
            } transition-all ease-linear duration-50`}
          >
            {`${flag || total || next || ''}${operation || ''}${
              (operation && next) || ''
            }`}
          </span>
          <span
            className={`${
              equalsClicked
                ? 'text-5xl sm:text-3xl'
                : 'text-slate-200 text-4xl sm:text-2xl'
            } ${!isAC && 'transition-all ease-linear duration-50'}`}
          >
            {`${((next || total) && '=') || ''} ${
              (!total && (next || 0)) || total || 0
            }`}
          </span>
        </div>
      </div>
      <div className="bg-black pb-6 grid grid-cols-4 row-span-6 sm:row-span-9 gap-0.125 sm:gap-0.5 ">
        {btnFn.map((btn) => (
          <Button
            key={btn}
            className={`
            ${isOperator(btn) && 'text-orange-400'}
            `}
            onClick={buttonChangeHandler}
          >
            <span
              className={`
              ${
                // prettier-ignore
                isEquals(btn) && 'bg-orange-500 h-14 w-14 flex justify-center items-center rounded-full text-gray-200'
              }
            `}
            >
              {isExp(btn) ? exp : btn}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
