import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import store from './pages/Redux/store';
import { router } from './Routes/Route';


function App() {

  return (
    <div className="App">
      <Provider store={store
      }>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
