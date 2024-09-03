import { useState } from "react";
import TabButton from "../TabsButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";

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
    <Section id='examples'>
      <menu>
        <TabButton isSelected={selectedTopic === 'components'} onClick={() => onSelect('components')}>Components</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => onSelect('jsx')}>JSX UI</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onClick={() => onSelect('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onClick={() => onSelect('state')}>State</TabButton>
      </menu>
      <div id='tab-content'>
        {tabContent}
      </div>
    </Section>
  );
}