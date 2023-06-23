import "./FirstComponent.css";

/*
 * Points to be covered:
 * CSS
 *    1. Internal Style
 *    2. Inline Style
 *    3. External Style
 * Css Import
 * Props
 */

const FirstComponent = (props) => {
  const { title } = props;
  // inline styling
  const objStyle = {
    color: "red",
    backgroundColor: "black",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    textAlign: "center",
    border: "1px solid red",
  };

  return (
    <>
      {/* -- 1. Internal Style -- */}
      <div style={objStyle}>
        <h1>Hello World</h1>
      </div>

      {/* -- 2. Inline Style -- */}
      <div
        style={{
          color: "red",
          backgroundColor: "black",
        }}
      >
        <h1>{title}</h1>
      </div>

      {/* -- 3. External Style -- */}
      <div className="first-component">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default FirstComponent;
