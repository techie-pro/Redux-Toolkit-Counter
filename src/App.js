import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };
  return (
    <div>
      <h1>counter</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Incerment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
