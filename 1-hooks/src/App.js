import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/use-state/ClassCounter';
import Counter1 from './components/use-state/Counter1';
import Counter2 from './components/use-state/Counter2';
import Counter3 from './components/use-state/Counter3';
import Counter4 from './components/use-state/Counter4';
import Tabs from './components/use-effect/Tabs';
import WindowWidth from './components/use-effect/WindowWidth';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <Counter1 />
      <Counter2 />
      <Counter3 />
      <Counter4 /> */}

      {/* <Tabs /> */}

      <WindowWidth />
    </div>
  );
}

export default App;
