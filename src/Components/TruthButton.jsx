import {useState} from "react";

function TruthButton() {
  const [togButton, setTogButton] = useState(false);

  return (
    <>
      <button onClick={() => setTogButton(!togButton)}>
        {togButton ? "Hide" : "Show"}
      </button>
      {togButton && <p>Welcome to imagined idea</p>}
    </>
  );
}

export default TruthButton;
