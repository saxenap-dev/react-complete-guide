
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';

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
