import {Counter} from './component/useState/Counter';
import {TodoList} from './component/useState/TodoList';
import {Counter2} from './component/useEffect/Counter2';

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
      <Counter2 />
    </div>
  );
}


export default App;
