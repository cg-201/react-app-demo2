import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div>
      <MyComponent></MyComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}

/** SPECIAL FUNCTION :: USING REACT :: return jsx */
// <h1> :: <MyComponent>
const MyComponent = () => {
  return (
    <div>
      <h1>React Heading </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        error aperiam temporibus sunt alias iusto ex facere blanditiis non
        eligendi impedit a et rerum, cumque beatae harum fuga ut! Vero.
      </div>

      <h4>Heading 6</h4>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit assumenda
        sequi, excepturi molestiae veniam, error officiis earum repellat iste
        iure rerum sed sit placeat facere ex dignissimos! Temporibus, sit
        facere.
      </div>
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div>
      <h1>Second Component</h1>
    </div>
  );
};
