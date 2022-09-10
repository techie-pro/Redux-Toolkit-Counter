import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incre = () => {
    dispatch(actions.increment());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  const decre = () => {
    dispatch(actions.decrement());
  };
  return (
    <div>
      <h1>counter</h1>
      <h1>{counter}</h1>
      <button onClick={incre}>Incerment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
