import React from 'react';
import * as PropTypes from 'prop-types';
import SliderComponent from '../utils/SliderComponent';

const PriceSlider = props => {
  const { sliderValue, onChange, min, max, initial, step } = props;

  return (
    <>
      <span className="text-black fs--1">
        {sliderValue?.length === 0 ? (
          <span>
            {initial?.[0]} $ &mdash; {initial?.[1]} $
          </span>
        ) : (
          <span>
            {sliderValue?.[0]} $ &mdash; {sliderValue?.[1]} $
          </span>
        )}
      </span>

      <SliderComponent
        step={step}
        min={min}
        max={max}
        def={initial}
        isRange={true}
        onChange={onChange}
      />
    </>
  );
};

PriceSlider.propTypes = {
  weekDays: PropTypes.any,
  sliderValue: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  initial: PropTypes.array,
  step: PropTypes.number
};

export default PriceSlider;
