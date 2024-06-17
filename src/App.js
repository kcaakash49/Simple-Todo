
import { RecoilRoot } from 'recoil';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className='text-red-700'>
        Todo Application
      </div>
      <TodoList/>

    </RecoilRoot>
  );
}

export default App;
