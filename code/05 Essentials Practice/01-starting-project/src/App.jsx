import { useState } from 'react';

import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import InputGroup from './components/InputGroup/InputGroup';
import Results from './components/Results/Results';

const inputFields = [
  {
    name: "Initial Investment",
    value: 10000,
    step: 1000
  },
  {
    name: "Annual Investment",
    value: 1200,
    step: 1000
  },
  {
    name: "Expected Return",
    value: 6,
    step: 0.1
  },
  {
    name: "Duration",
    value: 10,
    step: 1
  }
]

function App() {
  const [inputValues, setInputValues] = useState(inputFields);

  const inputChangeHandler = (inputIdentifier, newValue) => {
    setInputValues(prevValues => {
      return prevValues.map(input => input.name === inputIdentifier ? { ...input, value: newValue } : input);
    });
  }

  const initialInvestment = inputValues.find(input => input.name === 'Initial Investment').value;
  const annualInvestment = inputValues.find(input => input.name === 'Annual Investment').value;
  const expectedReturn = inputValues.find(input => input.name === 'Expected Return').value;
  const duration = inputValues.find(input => input.name === 'Duration').value;

  return (
    <>
      <Header />
      <InputGroup>
        {inputValues.map(
          ({ name, value, step }) => <UserInput
            key={name}
            name={name}
            value={value}
            step={step}
            onChange={inputChangeHandler}
          />)
        }
      </InputGroup>
      <Results 
        initialInvestment={initialInvestment} 
        annualInvestment={annualInvestment} 
        expectedReturn={expectedReturn} 
        duration={duration} 
      />
    </>
  )
}

export default App;
