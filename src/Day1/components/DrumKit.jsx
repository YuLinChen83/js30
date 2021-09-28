import { useContext } from 'react';
import PropTypes from 'prop-types';
import { TransitionContext } from '../context';

const drumns = [
  { code: '49', src: './src/Day1/sounds/clap.wav' },
  { code: '50', src: './src/Day1/sounds/hihat.wav' },
  { code: '51', src: './src/Day1/sounds/kick.wav' },
  { code: '52', src: './src/Day1/sounds/openhat.wav' },
  { code: '53', src: './src/Day1/sounds/boom.wav' },
  { code: '54', src: './src/Day1/sounds/ride.wav' },
  { code: '55', src: './src/Day1/sounds/snare.wav' },
  { code: '56', src: './src/Day1/sounds/tom.wav' },
  { code: '57', src: './src/Day1/sounds/tink.wav' },
];

const Drum = ({ code, title, src }) => {
  const { removeTransition } = useContext(TransitionContext);
  return (
    <div
      className="drum bg-black border border-black w-20 h-20 flex flex-col justify-center items-center rounded m-2 py-3"
      onTransitionEnd={removeTransition}
    >
      <kbd className="text-white text-xl mb-1">{String.fromCharCode(code)}</kbd>
      <span className="uppercase text-yellow-400 text-xs">{title}</span>
      <audio data-key={code} src={src} />
    </div>
  );
};
Drum.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const DrumKit = () => (
  <div className="bg-yellow flex flex-wrap justify-center my-3">
    {drumns.map((drum) => (
      <Drum
        key={drum.code}
        code={drum.code}
        title={drum.src.match(/sounds\/(.+).wav/i)[1]}
        src={drum.src}
      />
    ))}
  </div>
);

export default DrumKit;
