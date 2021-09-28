import { useEffect } from 'react';
import { TransitionContext } from './context';
import DrumKit from './components/DrumKit';
import Pinao from './components/Pinao';
import './index.css';

const DayOne = () => {
  const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    const key = audio.parentElement;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  };

  const removeTransition = (e) => {
    if (e.type === 'transitionend' && e.propertyName !== 'transform') return;
    if (e.type === 'ended') e.target.parentElement.classList.remove('playing');
    else e.target.classList.remove('playing');
  };

  useEffect(() => {
    window.addEventListener('keydown', playSound);
    return () => {
      window.removeEventListener('keydown', playSound);
    };
  }, []);

  return (
    <div className="bg-yellow-900 flex flex-col justify-center items-center min-h-screen">
      <TransitionContext.Provider value={{ removeTransition }}>
        <DrumKit />
        <Pinao />
      </TransitionContext.Provider>
    </div>
  );
};

export default DayOne;
