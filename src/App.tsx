
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';


function App() {

  const router = createBrowserRouter(
    AppRouter
  );

  return <RouterProvider router={router} />;

}

export default App;
