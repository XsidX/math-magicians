import React from 'react';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShapes,
  faScaleBalanced,
  faRulerHorizontal,
  faCube,
  faTemperatureHalf,
  faGaugeSimple,
  faClock,
  faTag,
  faStethoscope,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

const iconsObj = {
  shapes: faShapes,
  scaleBalanced: faScaleBalanced,
  rulerHorizontal: faRulerHorizontal,
  cube: faCube,
  temperatureHalf: faTemperatureHalf,
  gaugeSimple: faGaugeSimple,
  clock: faClock,
  tag: faTag,
  stethoscope: faStethoscope,
  wifi: faWifi,
};

const ConversionItem = ({ conversion }) => {
  const { name, icon } = conversion;
  const iconType = iconsObj[icon];
  return (
    <button
      type="button"
      className="text-stone-500 flex flex-col justify-center items-center gap-y-4 w-full py-4"
    >
      <FontAwesomeIcon icon={iconType} className="text-stone-400" />
      <h2 className="font-roboto text-sm">{name}</h2>
    </button>
  );
};

ConversionItem.propTypes = {
  conversion: propTypes.shape({
    name: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
  }).isRequired,
};

export default ConversionItem;
