import React, { useState, useEffect } from 'react';
import { useStyles } from './appstyle';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const choices = [
  { name: 'Taş', emoji: '✊' },
  { name: 'Kağıt', emoji: '👋' },
  { name: 'Makas', emoji: '✌️' },
];

const App = () => {
  const classes = useStyles();
  const { width, height } = useWindowSize();
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [thinkingDots, setThinkingDots] = useState('.');

  useEffect(() => {
    if (isThinking) {
      const interval = setInterval(() => {
        setThinkingDots((prev) => (prev.length === 3 ? '.' : prev + '.'));
      }, 500);
      return () => clearInterval(interval);
    } else {
      setThinkingDots('.');
    }
  }, [isThinking]);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setIsThinking(true);

    setTimeout(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
      determineWinner(choice, randomChoice);
      setIsThinking(false);
    }, 2000);
  };

  const determineWinner = (user, computer) => {
    if (user.name === computer.name) {
      setResult('Berabere!');
    } else if (
      (user.name === 'Taş' && computer.name === 'Makas') ||
      (user.name === 'Kağıt' && computer.name === 'Taş') ||
      (user.name === 'Makas' && computer.name === 'Kağıt')
    ) {
      setResult('Kazandın!');
      setShowConfetti(true);
    } else {
      setResult('Kaybettin!');
    }
  };

  const handleRestart = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
    setShowConfetti(false);
  };

  return (
    <div className={classes.appContainer}>
      <h1 className={classes.title}>Taş, Kağıt, Makas</h1>
      {userChoice === null ? (
        <div className={classes.choicesContainer}>
          {choices.map((choice) => (
            <div
              key={choice.name}
              className={classes.choiceButton}
              onClick={() => handleUserChoice(choice)}
            >
              <span className={classes.choiceEmoji}>{choice.emoji}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.choiceEmoji} style={{ fontSize: '7rem' }}>
          {userChoice.emoji}
        </div>
      )}

      {isThinking && <div className={classes.thinkingText}>Bilgisayar düşünüyor{thinkingDots}</div>}

      {computerChoice && (
        <div className={classes.computerChoiceContainer}>{computerChoice.emoji}</div>
      )}

      {result && <div className={classes.resultMessage}>{result}</div>}

      {showConfetti && <Confetti width={width} height={height} />}

      {result && (
        <button className={classes.restartButton} onClick={handleRestart}>
          Yeniden Oyna
        </button>
      )}

      <div className={classes.footer}>created by EspeeeBne</div>
    </div>
  );
};

export default App;
