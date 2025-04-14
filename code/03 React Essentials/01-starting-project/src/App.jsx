import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';

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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(
              (c) => (<CoreConcept key={c.title} {...c} />)
            )}
          </ul>
        </section>
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
