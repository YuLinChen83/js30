import { useContext } from 'react';
import PropTypes from 'prop-types';
import { TransitionContext } from '../context';

const whiteKeys = [
  { code: '90', src: './src/Day1/sounds/c4.ogg' },
  { code: '88', src: './src/Day1/sounds/d4.ogg' },
  { code: '67', src: './src/Day1/sounds/e4.ogg' },
  { code: '86', src: './src/Day1/sounds/f4.ogg' },
  { code: '66', src: './src/Day1/sounds/g4.ogg' },
  { code: '78', src: './src/Day1/sounds/a4.ogg' },
  { code: '77', src: './src/Day1/sounds/b4.ogg' },
  { code: '188', src: './src/Day1/sounds/c5.ogg' },
];

const blackKeys = [
  { code: '83', src: './src/Day1/sounds/c-4.ogg' },
  { code: '68', src: './src/Day1/sounds/d-4.ogg' },
  { code: '71', src: './src/Day1/sounds/f-4.ogg' },
  { code: '72', src: './src/Day1/sounds/g-4.ogg' },
  { code: '74', src: './src/Day1/sounds/a-4.ogg' },
];

const WhiteKeys = () => {
  const { removeTransition } = useContext(TransitionContext);
  return whiteKeys.map(({ code, src }) => (
    <div key={code} className="white relative">
      <audio data-key={code} src={src} onEnded={removeTransition} />
      <kbd className="key">{String.fromCharCode(code)}</kbd>
    </div>
  ));
};

const BlackKeys = ({ keys }) => {
  const { removeTransition } = useContext(TransitionContext);
  return (
    <div className="black-keys absolute flex">
      {keys.map(({ code, src }) => (
        <div key={code} className="black relative">
          <audio data-key={code} src={src} onEnded={removeTransition} />
          <kbd className="key">{String.fromCharCode(code)}</kbd>
        </div>
      ))}
    </div>
  );
};
BlackKeys.propTypes = {
  keys: PropTypes.array.isRequired,
};

const Pinao = () => (
  <>
    <div className="flex relative">
      <WhiteKeys keys={whiteKeys} />
      <BlackKeys keys={blackKeys} />
    </div>
  </>
);

export default Pinao;
