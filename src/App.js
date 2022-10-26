import logo from './logo.svg';
import './App.css';
import { routes } from './components/Routes';
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>

    </div>
  );
}

export default App;
