import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  choicesContainer: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    justifyContent: 'space-evenly',
    width: '80%',
    maxWidth: '600px',
  },
  choiceButton: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'transform 0.3s',
    },
    '&:active': {
      transform: 'scale(1.1)',
    },
  },
  choiceEmoji: {
    fontSize: '5rem',
    transition: 'transform 0.5s',
  },
  animateChoice: {
    fontSize: '7rem',
    animation: '$spin 1s ease-in-out',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  resultMessage: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#4caf50',
    textTransform: 'uppercase',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  footer: {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    fontSize: '0.8rem',
    fontStyle: 'italic',
    color: '#888',
    backgroundColor: '#f9f9f9',
    padding: '5px 10px',
    borderRadius: '5px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
  },
  computerChoiceContainer: {
    marginTop: '20px',
    fontSize: '5rem',
    animation: '$fadeIn 2s ease-in-out',
    color: '#ff5722',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  restartButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#115293',
    },
    '&:active': {
      transform: 'scale(0.95)',
    },
  },
  thinkingText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#ff9800',
    animation: '$dots 1s steps(3, end) infinite',
  },
  '@keyframes dots': {
    '0%': {
      content: '"."',
    },
    '33%': {
      content: '".."',
    },
    '66%': {
      content: '"..."',
    },
  },
  scoreContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    maxWidth: '400px',
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  scoreText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  scoreValue: {
    fontSize: '1.8rem',
    color: '#1976d2',
  },
  choiceHighlight: {
    border: '2px solid #4caf50',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0px 0px 10px rgba(0, 255, 0, 0.5)',
  },
  appHeader: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '10px 0',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  appFooter: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: '10px',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.2)',
  },
  fadeInOut: {
    animation: '$fadeInOut 3s ease-in-out infinite',
  },
  '@keyframes fadeInOut': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
  glowingText: {
    fontSize: '2rem',
    color: '#ffeb3b',
    textShadow: '0 0 5px #ffeb3b, 0 0 10px #ffc107, 0 0 15px #ff9800',
  },
  animatedBounce: {
    animation: '$bounce 2s infinite',
  },
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
  },
  body: {
    margin: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  code: {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
  gradientBackground: {
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    color: 'white',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
  pulseEffect: {
    animation: '$pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.05)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
  shadowText: {
    fontSize: '2rem',
    textShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
  },
  blurEffect: {
    filter: 'blur(2px)',
  },
  rotateAnimation: {
    animation: '$rotate 5s linear infinite',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  scaleOnHover: {
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  neonBorder: {
    border: '2px solid #39ff14',
    boxShadow: '0 0 5px #39ff14, 0 0 10px #39ff14',
    padding: '15px',
    borderRadius: '10px',
  },
});

export { useStyles };
