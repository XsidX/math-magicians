import React from 'react';
import ConversionItem from '../components/UI/ConversionItem';
import data from '../data/conversions.json';

const ListConversions = () => {
  const CONVERSIONSDATA = JSON.parse(JSON.stringify(data));

  return (
    <div className="px-3 ">
      <ul className="grid grid-cols-3 gap-y-10">
        {CONVERSIONSDATA.map((conversion) => (
          <li key={conversion.name}>
            <ConversionItem conversion={conversion} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListConversions;
