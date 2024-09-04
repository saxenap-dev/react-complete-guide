import './CoreConcept.css';

export default function CoreConcept({title, image, description}) { // destructured the props
    return (
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }