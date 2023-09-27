import { useState } from 'react';
import './App.css';
import MultiButton from './components/MultiButton/index.js';
import DotContainer from './components/DotContainer/index.js';

function App() {
  const [ step, setStep ] = useState(0);

  const handleForward = () => {
    setStep((curr) => curr + 1);
  }

  const renderContent = (step) => {
    switch(step) {
      case 0:
        return <MultiButton onClickHandler={handleForward} copy='Start' type='success' size='large'/>;
      case 1:
        return <DotContainer />
      case 2:
        return <MultiButton />
      default:
        return <MultiButton onClickHandler={handleForward} copy='Start' type='success' size='large'/>;
    }
  }

  return (
    <div className="App">
      {renderContent(step)}
    </div>
  );
}

export default App;
