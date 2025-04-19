/* File: App.jsx */
import { useState } from "react";

function App() {
  const [state_array_color, set_array_color] = useState([
    "red",
    "yellow",
    "green",
  ]);
  return (
    <div>
      <h1>
        <b>Color Array Data: </b>
        {state_array_color}
      </h1>
      <ul>
        {state_array_color.map((elem, index) => {
          return (
            <li key={index}>
              Index {index}: {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
