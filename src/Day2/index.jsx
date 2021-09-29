import { useState, useEffect } from 'react';
import clsx from 'clsx';
import './index.css';

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const getDeg = (value, unit) => (value / unit) * 360 + 90;

  useEffect(() => {
    const timerID = setInterval(() => setDateTime(new Date()), 300);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-col justify-center items-center h-screen min-w-max',
        'bg-gradient-to-br from-blue-300 to-green-100'
      )}
    >
      <div className="w-96 h-96 border-white border-20 rounded-circle shadow-clock p-3">
        <div className="relative w-full h-full">
          <div
            className="hand transform scale-y-70 scale-x-75"
            style={{
              '--tw-rotate': `${getDeg(dateTime.getHours(), 12)}deg`,
            }}
          ></div>
          <div
            className="hand"
            style={{
              '--tw-rotate': `${getDeg(dateTime.getMinutes(), 60)}deg`,
            }}
          ></div>
          <div
            className="hand transform scale-x-90 scale-y-50"
            style={{
              '--tw-rotate': `${getDeg(dateTime.getSeconds(), 60)}deg`,
            }}
          ></div>
          <div className="absolute w-8 h-8 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-circle shadow-clock-inner" />
        </div>
      </div>
    </div>
  );
};

export default Clock;
