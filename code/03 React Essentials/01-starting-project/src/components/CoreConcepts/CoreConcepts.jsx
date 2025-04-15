import { CORE_CONCEPTS } from '../../data.js'
import CoreConcept from './CoreConcept/CoreConcept.jsx'
import Section from '../Section/Section.jsx'
import './CoreConcepts.css'

function CoreConcepts() {
    return (
        <Section title="Core Concepts" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map(
              (c) => (<CoreConcept key={c.title} {...c} />)
            )}
          </ul>
      </Section>
    )
}

export default CoreConcepts;