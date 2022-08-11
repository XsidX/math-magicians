import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const MiniHistory = ({ history, show, newCalc, isAC, className, isIgnored }) => {
  const prepHistory = history.total && { id: uuidv4(), ...history };

  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    if (isAC) {
      localStorage.clear();
      setHistoryList([]);
    }
    const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
    if (prepHistory && !isIgnored) storedHistory.push(prepHistory);
    localStorage.setItem('history', JSON.stringify(storedHistory));
  }, [prepHistory, isAC, isIgnored]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('history')) || [];
    // reverse the array so the most recent calculation is at the top
    if (newCalc) setHistoryList(item.reverse());
  }, [newCalc]);

  return (
    <div className={`${className} text-stone-500 text-xl text-right pb-1`}>
      <div className="hidden md:block text-left text-stone-400 text-lg font-medium">
        <h2 className="border-b border-stone-200 inline pb-1">History</h2>
      </div>
      {!isAC &&
        historyList.slice(0, show).map(({ id, total, prevTotal, prevOp, prevNext }) => (
          <div key={id} className="flex flex-col pb-3 md:pb-7">
            <span className="md:text-base">{`${prevTotal} ${prevOp} ${prevNext}`}</span>
            <span className="md:text-2xl md:text-stone-400">{`= ${total}`}</span>
          </div>
        ))}
    </div>
  );
};

MiniHistory.propTypes = {
  history: PropTypes.shape({
    total: PropTypes.bool || PropTypes.string,
    prevTotal: PropTypes.string,
    prevOp: PropTypes.string,
    prevNext: PropTypes.string,
  }).isRequired,
  show: PropTypes.number.isRequired,
  newCalc: PropTypes.bool,
  isAC: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  isIgnored: PropTypes.bool,
};

MiniHistory.defaultProps = {
  newCalc: false,
  isIgnored: false,
};

export default MiniHistory;
