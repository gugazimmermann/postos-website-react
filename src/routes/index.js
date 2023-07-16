import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import Register from '../pages/register/Register';
import RegisterCode from '../pages/register/Code';
import RegisterOrganizationData from '../pages/register/OrganizationData';
import RegisterSuccess from '../pages/register/Success';

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
    element: <RegisterCode />,
  },
  {
    path: 'cadastro/codigo/:userId/:confirmationCode',
    element: <RegisterCode />,
  },
  {
    path: 'cadastro/finalizar/:userId',
    element: <RegisterOrganizationData />,
  },
  {
    path: 'cadastro/sucesso/:userId',
    element: <RegisterSuccess />,
  },
]);

export default router;
