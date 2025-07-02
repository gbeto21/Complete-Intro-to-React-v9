const Pizza = (props) => {
  return React.createElement(
    "div",
    {},
    // [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.description),
    //   ]
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The New Peperoni",
      description: "some dope piza",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French",
    }),
    React.createElement(Pizza, {
      name: "The Hawaian",
      description: "Pineaple and ham",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "unholy potato mash.",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
