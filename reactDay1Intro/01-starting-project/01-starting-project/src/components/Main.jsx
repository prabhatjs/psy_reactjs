import { useState } from "react";
import { CORE_CONCEPTS } from "../data";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
function CoreConsepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default function Main() {
  // chnage the UI on the click of button we need hooks
  const [SelectTopic, setSelectedTopic] = useState(null);
  // which button is selected
  function handleSelect(selectedButton) {
    //selectedButton=> 'components','jsx','props','state'
    console.log(`hello Selected ${selectedButton}`);
    setSelectedTopic(selectedButton);
  }
  return (
    <main>
      <section id="core-concepts">
        <h2>Core Consepts list</h2>
        <ul>
          {/* we can use like this  how can pass data from one component to other using props*/}
          {/* <CoreConsepts title="Props Handling"  img={imag1} description="React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. "/>
      <CoreConsepts title="State Managment" img={imag2} description="State can be defined as an object that houses data that changes over time in an application. In other words, state is a dynamic data storage that provides a mechanism for components to manage, keep track of changing data, and trigger re-rendering when it is updated."/>
      <CoreConsepts title="Get In Hooks" img={imag3}    description="Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed."/>
      */}

          {/* we can use here rest operator when props name, the data set  data key value name is same  */}
          <CoreConsepts {...CORE_CONCEPTS[0]} />
          <CoreConsepts {...CORE_CONCEPTS[1]} />
          <CoreConsepts {...CORE_CONCEPTS[2]} />

          <CoreConsepts
            image={CORE_CONCEPTS[3].image}
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
          />
        </ul>
      </section>
      {/* add button section */}
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/*onselect work as an prop and this pass action in to TabButton Function  */}
          <TabButton onSelect={() => handleSelect("components")}>Component</TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
          <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
        </menu>
        {/* dynamic content which depends on button which button is click ,first we listen to click on custome button */}
        {/* {SelecTopic} */}
        {!SelectTopic ? <p>Plese Select One Content</p> : null}
        {SelectTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[SelectTopic].title}</h3>
            <p>{EXAMPLES[SelectTopic].description}</p>
            <pre>
              <code>{EXAMPLES[SelectTopic].code}</code>
            </pre>
          </div>
        ) : null}
      </section>
    </main>
  );
}
