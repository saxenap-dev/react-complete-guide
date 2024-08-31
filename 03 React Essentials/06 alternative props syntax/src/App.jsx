import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data';

const words = ['Fundamental', 'Crutial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max+1));
}

function Header() {
  const description = words[getRandomInt(2)];
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials!</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}

function CoreConcepts({title, image, description}) { // destructured the props
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <div id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            {/* passing props by destructuring */}
            <CoreConcepts { ...CORE_CONCEPTS[1]}/>
            <CoreConcepts { ...CORE_CONCEPTS[2]}/>
            <CoreConcepts { ...CORE_CONCEPTS[3]}/>
          </ul>
        </div>
        
      </main>
    </div>
  );
}

export default App;
