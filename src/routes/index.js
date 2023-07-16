import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import Register from '../pages/register/Register';
import Code from '../pages/register/Code';
import OrganizationData from '../pages/register/OrganizationData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: 'cadastro',
    element: <Register />,
  },
  {
    path: 'cadastro/codigo/:userId',
    element: <Code />,
  },
  {
    path: 'cadastro/codigo/:userId/:confirmationCode',
    element: <Code />,
  },
  {
    path: 'cadastro/finalizar/:userId',
    element: <OrganizationData />,
  },
]);

export default router;
