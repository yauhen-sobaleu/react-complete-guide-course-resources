import { EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic</p>
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
              <TabButton 
                  isSelected={selectedTopic === 'components'} 
                  onClick={() => setSelectedTopic('components')}
              >
                  Components
              </TabButton>
              <TabButton 
                  isSelected={selectedTopic === 'jsx'} 
                  onClick={() => setSelectedTopic('jsx')}
              >
                  JSX
              </TabButton>
              <TabButton 
                  isSelected={selectedTopic === 'props'} 
                  onClick={() => setSelectedTopic('props')}
              >
                  Props
              </TabButton>
              <TabButton 
                  isSelected={selectedTopic === 'state'} 
                  onClick={() => setSelectedTopic('state')}
              >
                  State
              </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
