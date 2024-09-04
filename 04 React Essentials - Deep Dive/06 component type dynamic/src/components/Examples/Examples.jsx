import { useState } from "react";
import TabButton from "../TabButton/TabButton";
import { EXAMPLES } from "../../data";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');
  function onSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a button!</p>

  if (selectedTopic) {
    tabContent = <div id='tab-content'>
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
      <Tabs 
        buttonsContainer='menu'
        buttons={
        <>
          <TabButton data-p='1' isSelected={selectedTopic === 'components'} onClick={() => onSelect('components')}>Components</TabButton>
          <TabButton data-p='2' isSelected={selectedTopic === 'jsx'} onClick={() => onSelect('jsx')}>JSX UI</TabButton>
          <TabButton data-p='3' isSelected={selectedTopic === 'props'} onClick={() => onSelect('props')}>Props</TabButton>
          <TabButton data-p='4' isSelected={selectedTopic === 'state'} onClick={() => onSelect('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
      <menu>
        
      </menu>
    </Section>
  );
}