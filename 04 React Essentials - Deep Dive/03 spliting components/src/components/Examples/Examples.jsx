import { useState } from "react";
import TabButton from "../TabsButton/TabButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');
  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a button!</p>

  if (selectedTopic) {
    tabContent = <div>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }
  return (
    <section id="examples">
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onSelect={() => onSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => onSelect('jsx')}>JSX UI</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect={() => onSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect={() => onSelect('state')}>State</TabButton>
      </menu>
      <div id="tab-content">
        {/* {!tabContent && <p>Please select a button</p>}
            {tabContent && (
              <div>
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[tabContent].code}
                  </code>
                </pre>
              </div>
            )} */}
        {tabContent}
      </div>
    </section>
  );
}