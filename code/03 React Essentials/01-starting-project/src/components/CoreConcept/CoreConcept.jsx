import './CoreConcept.css';

/**
 * CoreConcept component displays a single core concept of React.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the core concept.
 * @param {string} props.image - The source URL of the image representing the core concept.
 * @param {string} props.description - A brief description of the core concept.
 * 
 * @returns {JSX.Element} A list item containing an image, title, and description of the core concept.
 */
function CoreConcept({ key, title, image, description }) {
    return (
        <li key={key}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        </li>
    )
}

export default CoreConcept;