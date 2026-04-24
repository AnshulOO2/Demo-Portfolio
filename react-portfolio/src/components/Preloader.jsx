import { useEffect, useState } from 'react';

const greetings = [
  "Hi", "Hello", "नमस्ते", "வணக்கம்", "ನಮಸ್ಕಾರ", 
  "নমস্কার", "Bonjour", "Hola", "Ciao", "Привет", 
  "こんにちは", "안녕하세요", "Welcome"
];

function Preloader({ onComplete }) {
  const [wordIdx, setWordIdx] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // prevent scrolling while preloading

    const timeoutList = [];

    const showNextWord = (currentIndex) => {
      if (currentIndex === 0) setShowWord(true);
      
      if (currentIndex < greetings.length) {
        setWordIdx(currentIndex);
        
        let duration;
        if (currentIndex < 3) {
          duration = 450;
        } else if (currentIndex === greetings.length - 1) {
          duration = 700;
        } else {
          duration = 150;
        }
        
        const nextTimeout = setTimeout(() => showNextWord(currentIndex + 1), duration);
        timeoutList.push(nextTimeout);
      } else {
        setIsDone(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete(); // signal that preloader is fully done
        }, 600); // 600ms corresponds to the transform transition duration
      }
    };

    const initialTimeout = setTimeout(() => showNextWord(0), 200);
    timeoutList.push(initialTimeout);

    return () => {
      document.body.style.overflow = '';
      timeoutList.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div id="preloader" className={isDone ? 'done' : ''}>
      <div className="preloader-pane preloader-top"></div>
      <div className="preloader-pane preloader-bottom"></div>
      <div id="preloader-words" className={showWord ? 'show' : ''}>
        {greetings[wordIdx]}
      </div>
    </div>
  );
}

export default Preloader;
