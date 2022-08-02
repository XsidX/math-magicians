import React, { Component } from 'react';
import Button from './UI/Button';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      prevTotal: null,
      prevNext: null,
      prevOp: null,
      equalsClicked: false,
    };
  }

  render() {
    const btnFn = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    const isOperator = (btn) => btn === '+' || btn === '-' || btn === 'x' || btn === '÷' || btn === '=';
    const isZero = (btn) => btn === 0;

    const buttonChangeHandler = (e) => {
      const buttonName = e.target.innerText;
      // eslint-disable-next-line max-len
      const {
        total, next, operation, prevTotal, prevNext, prevOp,
      } = calculate(this.state, buttonName);
      this.setState({
        total,
        next,
        operation,
        prevTotal,
        prevNext,
        prevOp,
        equalsClicked: true,
      });
    };

    const {
      total, next, operation, prevTotal, prevNext, prevOp, equalsClicked,
    } = this.state;

    // retain the previous calculations/expression when equals is clicked
    const flag = equalsClicked && `${prevTotal || total || ''} ${prevOp || ''} ${prevNext || ''}`;

    return (
      <div className="h-full w-full grid grid-rows-6 sm:h-1/2 sm:w-1/2">
        <div className="relative bg-gray-500 row-span-3 sm:row-span-1">
          <div className="absolute right-4 bottom-2 text-gray-200 text-right text-3xl md:text-2xl flex flex-col">
            <span className="font-bold">{`${flag || total || next || ''} ${operation || ''} ${(operation && next) || ''}`}</span>
            <span>{`${((next || total) && '=') || ''} ${(!total && (next || 0)) || total || 0}`}</span>
          </div>
        </div>
        <div className="bg-gray-400 grid grid-cols-4 row-span-3 sm:row-span-5 gap-0.125 sm:gap-0.5 ">
          {btnFn.map((btn) => (
            <Button key={btn} className={`${isOperator(btn) && 'bg-orange-500'} ${isZero(btn) && 'col-span-2'}`} onClick={buttonChangeHandler}>
              {btn}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}
