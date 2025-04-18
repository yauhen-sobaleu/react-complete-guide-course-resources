import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import InputGroup from './components/InputGroup/InputGroup';

function App() {
  return (
    <>
      <Header />
      <InputGroup>
        <UserInput name="Initial Investment" initialValue="10000" step="1000" />
        <UserInput name="Annual Investment" initialValue="2000" step="1000" />
        <UserInput name="Expected Return" initialValue="5" step="0.1" />
        <UserInput name="Duration" initialValue="10" step="1" />
      </InputGroup>
    </>
  )
}

export default App;
