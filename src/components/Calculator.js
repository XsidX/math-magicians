import React, { Component } from 'react';
import Button from './UI/Button';

export default class Calculator extends Component {
  render() {
    const btnFn = ['AC', '+/-', '%', '÷', 7, 8, 9, '×', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    const isOperator = (btn) => btn === '+' || btn === '-' || btn === '×' || btn === '÷' || btn === '=';
    const isZero = (btn) => btn === 0;

    return (
      <div className="h-full w-full grid grid-rows-6 sm:h-1/2 sm:w-1/2">
        <div className="relative bg-gray-500 row-span-3 sm:row-span-1">
          <div className="absolute right-4 bottom-2 text-gray-200 md:text-3xl">0</div>
        </div>
        <div className="bg-gray-400 grid grid-cols-4 row-span-3 sm:row-span-5 gap-0.125 sm:gap-0.5 ">
          {btnFn.map((btn) => (
            <Button key={btn} className={`${isOperator(btn) && 'bg-orange-400'} ${isZero(btn) && 'col-span-2'}`}>
              {btn}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}