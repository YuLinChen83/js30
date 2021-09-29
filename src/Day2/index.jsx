import { useState, useEffect } from 'react';
import clsx from 'clsx';
import './index.css';

const Clock = () => {
  const [timeDeg, setTimeDeg] = useState(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const s = (seconds / 60) * 360 + 90;
    const m = (mins / 60) * 360 + seconds * (6 / 60) + 90;
    const h = (hours / 12) * 360 + mins * (30 / 60) + 90;
    return { s, m, h };
  });

  const tic = () =>
    setTimeDeg((prev) => ({
      s: prev.s + 360 / 60,
      m: prev.m + 360 / (60 * 60),
      h: prev.h + 360 / (60 * 60 * 12),
    }));

  useEffect(() => {
    const timerID = setInterval(() => tic(), 1000);

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
              '--tw-rotate': `${timeDeg.h}deg`,
            }}
          ></div>
          <div
            className="hand"
            style={{
              '--tw-rotate': `${timeDeg.m}deg`,
            }}
          ></div>
          <div
            className="hand transform scale-x-90 scale-y-50"
            style={{
              '--tw-rotate': `${timeDeg.s}deg`,
            }}
          ></div>
          <div className="absolute w-8 h-8 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-circle shadow-clock-inner" />
        </div>
      </div>
    </div>
  );
};

export default Clock;
