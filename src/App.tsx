import './App.css';
import { ContainerTable } from './components/table';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ContainerTable />
    </Provider>
  );
}

export default App;
