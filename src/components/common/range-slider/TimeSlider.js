import React from 'react';
import * as PropTypes from 'prop-types';
import SliderComponent from '../utils/SliderComponent';

const TimeSlider = props => {
  const {
    weekDays,
    sliderValue,
    onChange,
    timeOrDuration,
    min,
    max,
    initial,
    step
  } = props;

  return (
    <>
      <span className={'me-1 text-black fs--1'}>{weekDays[0].slice(0, 3)}</span>
      {isNaN(sliderValue[0]) ? (
        <span className="me-2 text-black fs--1">
          {timeOrDuration === 'time'
            ? '1 : 00 Pm - 3:00 Pm'
            : '20: 00 Hr - 40: 30 Hr'}
        </span>
      ) : (
        <span className="text-black fs--1">
          {sliderValue[0] % 1 !== 0
            ? (sliderValue[0] - 0.2).toFixed(2)
            : sliderValue[0].toFixed(2)}{' '}
          {timeOrDuration === 'time' ? 'Am' : 'Hr'} -
          {sliderValue[1] % 1 !== 0
            ? (sliderValue[1] - 0.2).toFixed(2)
            : sliderValue[1].toFixed(2)}{' '}
          {timeOrDuration === 'time' ? 'Pm' : 'Hr'}
        </span>
      )}

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

TimeSlider.propTypes = {
  weekDays: PropTypes.any,
  sliderValue: PropTypes.arrayOf(PropTypes.any),
  onChange: PropTypes.func,
  timeOrDuration: PropTypes.oneOf(['time', 'duration']),
  min: PropTypes.number,
  max: PropTypes.number,
  initial: PropTypes.array,
  step: PropTypes.number
};

export default TimeSlider;
