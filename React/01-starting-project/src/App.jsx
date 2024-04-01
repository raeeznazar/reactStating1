
// import componentsImage from './assets/components.png'
import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import {EXAMPLES} from'./example.js'




function App() {
  const [selectedTopic, setSelectedTopic] =useState();
  // let tabContent = 'Please click a button'
  function handleClick(selectedBtn) {
    
 setSelectedTopic(selectedBtn)
}
  return (
    <div>
     <Header />
      <main>
       <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem}/>)}     
        </ul>
       </section>

       <section id='examples'>
        <h2>Examples</h2>
        <menu>
        <TabButton  isSelected={selectedTopic === 'components'} onSelect= {()=>handleClick('components')}>Component</TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'} onSelect= {()=>handleClick('jsx')}>JSX</TabButton>
        <TabButton isSelected={selectedTopic === 'props'} onSelect= {()=>handleClick('props')}>Props</TabButton>
        <TabButton isSelected={selectedTopic === 'state'} onSelect= {()=>handleClick('state')}>state</TabButton>
        </menu>
        {!selectedTopic && <p>Please select a topic</p>}
       {selectedTopic &&  <div id='tab-content'> 
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>}
        {selectedTopic}
       </section>
      </main>
    </div>
  );
}

export default App;
