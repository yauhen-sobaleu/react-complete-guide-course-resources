import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const descriptions = [
    'Fundamental',
    'Crucial',
    'Fun',
    'Fast',
  ]

function getRandomDescription() {
    return descriptions[Math.floor(Math.random() * descriptions.length)];
}

/**
 * Header component displays the main header for the application.
 * 
 * This component includes a stylized image, a main title, and a 
 * randomly selected description that highlights the importance 
 * of React concepts for app development.
 * 
 * @returns {JSX.Element} A header element containing an image, 
 *                       a title, and a description paragraph.
 */
function Header() {
    const randomDescription = getRandomDescription();

    return (
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
            {randomDescription} React concepts you will need for almost any app you are
            going to build!
        </p>
        </header>
    );
}

export default Header;