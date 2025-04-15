import { CORE_CONCEPTS } from '../../data.js'
import CoreConcept from './CoreConcept/CoreConcept.jsx'
import './CoreConcepts.css'

function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map(
            (c) => (<CoreConcept key={c.title} {...c} />)
          )}
        </ul>
      </section>
    )
}

export default CoreConcepts;