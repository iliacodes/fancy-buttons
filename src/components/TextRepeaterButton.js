import { useState } from "react";

function TextRepeaterButton() {
  const [repetitions, setRepetitions] = useState(1);

  const handleClick = () => setRepetitions(repetitions + 1 );

  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={1}>I like this text.</span>)
  }

  return(
    <button onClick={handleClick} className="TextRepeaterButton">
    {textArray}
    </button> 
  )
}

export default TextRepeaterButton;