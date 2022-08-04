import React, { useState } from 'react';
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

  const btnFn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  // prettier-ignore
  const isOperator = (btn) => btn === '+' || btn === '-' || btn === 'x' || btn === '÷' || btn === '=';
  const isZero = (btn) => btn === 0;

  const buttonChangeHandler = (e) => {
    const buttonName = e.target.innerText;
    const {
      total, next, operation, prevTotal, prevNext, prevOp, equalsClicked,
    } = calculate(
      state,
      buttonName,
    );
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
    total, next, operation, prevTotal, prevNext, prevOp, equalsClicked, isAC,
  } = state;

  // retain the previous calculations/expression when equals is clicked
  const flag = equalsClicked && `${prevTotal || ''}${prevOp || ''}${prevNext || ''}`;

  return (
    <div className="h-full w-full grid grid-rows-12 sm:h-2/3 sm:w-1/2">
      <div className="relative bg-gray-500 row-span-6 sm:row-span-3">
        <div className="absolute right-4 bottom-2 md:bottom-1 text-gray-100 text-right flex flex-col gap-3 sm:gap-1 ">
          <span
            className={`${
              equalsClicked ? 'text-slate-200 text-3xl sm:text-xl' : 'text-5xl sm:text-3xl'
            } transition-all ease-linear duration-50`}
          >
            {`${flag || total || next || ''}${operation || ''}${(operation && next) || ''}`}
          </span>
          <span
            className={`${
              equalsClicked ? 'text-5xl sm:text-3xl' : 'text-slate-200 text-4xl sm:text-2xl'
            } ${!isAC && 'transition-all ease-linear duration-50'}`}
          >
            {`${((next || total) && '=') || ''} ${(!total && (next || 0)) || total || 0}`}
          </span>
        </div>
      </div>
      <div className="bg-gray-400 grid grid-cols-4 row-span-6 sm:row-span-9 gap-0.125 sm:gap-0.5 ">
        {btnFn.map((btn) => (
          <Button
            key={btn}
            className={`${isOperator(btn) && 'bg-orange-400'} ${isZero(btn) && 'col-span-2'}`}
            onClick={buttonChangeHandler}
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
