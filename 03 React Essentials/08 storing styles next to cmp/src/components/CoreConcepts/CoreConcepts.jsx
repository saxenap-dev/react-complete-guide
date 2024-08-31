import './CoreConcepts.css';

export default function CoreConcepts({title, image, description}) { // destructured the props
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }