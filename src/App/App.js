import EightBall from "../EightBall/EightBall.js";
import answers from "../answers.js";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
