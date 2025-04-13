import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Dynamic Content');

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
              <TabButton onClick={() => setSelectedTopic('Dynamic Content 1')}>Example 1</TabButton>
              <TabButton onClick={() => setSelectedTopic('Dynamic Content 2')}>Example 2</TabButton>
              <TabButton onClick={() => setSelectedTopic('Dynamic Content 3')}>Example 3</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  );
}

export default App;
