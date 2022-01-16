import { useState } from 'react';
import './App.css';

function App() {
  const [background, setBackground] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const getButtonText = () => (background === 'red' ? 'blue' : 'red');
  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={() => (background === 'red' ? setBackground('blue') : setBackground('red'))}
        style={{ backgroundColor: disabled ? 'grey' : background }}
        role="button"
        type="button"
      >
        Change to
        {' '}
        {getButtonText()}
      </button>
      <br />
      <label htmlFor="disable-button">
        Disable the button
        <input id="disable-button" onChange={() => setDisabled(!disabled)} type="checkbox" role="checkbox" />
      </label>
    </div>
  );
}

export default App;
