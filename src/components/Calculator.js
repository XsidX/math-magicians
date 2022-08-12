import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from './UI/Button';
import MiniHistory from './UI/MiniHistory';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    prevTotal: null,
    prevNext: null,
    prevOp: null,
    equalsPrevClicked: false,
    equalsClicked: false,
    newCalc: false,
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
      newCalc,
    } = calculate(state, buttonName);
    const isAC = e.target.innerText === 'AC';

    setState({
      total,
      next,
      operation,
      prevTotal,
      prevNext,
      prevOp,
      equalsPrevClicked: state.equalsClicked,
      equalsClicked,
      newCalc,
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
    equalsPrevClicked,
    equalsClicked,
    newCalc,
    isAC,
  } = state;

  // retain the previous calculations/expression when equals is clicked
  // prettier-ignore
  const flag = equalsClicked && `${prevTotal || ''} ${prevOp || ''} ${prevNext || ''}`;

  return (
    <div className="h-full w-full">
      <div className="h-full w-full grid grid-rows-12 md:w-3/4">
        <div className="relative bg-black mx-5 border-b border-neutral-700 md:border-none row-span-5">
          <div className="absolute right-0 bottom-3 md:bottom-1/2 md:pr-3 text-gray-100 text-right flex flex-col gap-3 sm:gap-1 ">
            <MiniHistory
              className="md:hidden"
              history={{
                total: equalsClicked && total,
                prevTotal,
                prevNext,
                prevOp,
              }}
              newCalc={equalsPrevClicked || newCalc}
              isAC={isAC}
              show={3}
            />
            <span
              className={`${
                equalsClicked ? 'text-2xl md:text-base md:text-stone-400' : 'text-5xl md:text-4xl'
              } transition-all ease-linear duration-50 md:pb-3`}
            >
              {`${flag || total || next || ''}${operation || ''}${
                (operation && next) || ''
              } ${(equalsClicked && '=') || ''}`}
            </span>
            <span
              className={`${
                equalsClicked
                  ? 'text-5xl'
                  : `${total && 'text-stone-500'} text-4xl md:text-3xl`
              } ${!isAC && 'transition-all ease-linear duration-50'}`}
            >
              {`${(!total && (next || 0)) || total || 0}`}
            </span>
          </div>
        </div>
        <div className="bg-black md:bg-stone-900 pb-10 md:pb-0 grid grid-cols-4 row-span-7 gap-0.125 sm:gap-0.5 ">
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
      <MiniHistory
        className="hidden md:block absolute top-0 right-0 pt-4 px-3 w-1/4"
        history={{
          total: equalsClicked && total,
          prevTotal,
          prevNext,
          prevOp,
        }}
        newCalc={equalsPrevClicked || newCalc}
        isAC={isAC}
        show={7}
        isIgnored
      />
    </div>
  );
};

export default Calculator;
