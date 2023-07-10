import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>counter: {count.counter}</p>
        <button
          type="button"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(incrementBy(2));
          }}
        >
          increment by
        </button>
      </header>
    </div>
  );
}

export default App;
