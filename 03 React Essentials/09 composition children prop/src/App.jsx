
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabsButton/TabButton';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            {/* passing props by destructuring */}
            <CoreConcepts { ...CORE_CONCEPTS[1]}/>
            <CoreConcepts { ...CORE_CONCEPTS[2]}/>
            <CoreConcepts { ...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Core</TabButton>
            <TabButton>JSX UI</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
