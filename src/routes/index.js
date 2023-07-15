import { createBrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import Register from '../register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Register />,
  },
  {
    path: "cadastro",
    element: <Register />,
  },
]);

export default router;
