import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import Register from '../pages/register/Register';
import RegisterCode from '../pages/register/Code';
import RegisterLogin from '../pages/register/Login';
import RegisterSuccess from '../pages/register/Success';
import GasStations from '../pages/gas-stations/GasStations';
import Companies from '../pages/companies/Companies';
import UsageTerms from '../pages/information/UsageTerms';
import Privacity from '../pages/information/Privacity';

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
    path: 'cadastro/login/:userId',
    element: <RegisterLogin />,
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
    path: 'cadastro/sucesso/:userId',
    element: <RegisterSuccess />,
  },
  {
    path: 'postos',
    element: <GasStations />,
  },
  {
    path: 'clientes',
    element: <Companies />,
  },
  {
    path: 'termos-de-uso',
    element: <UsageTerms />,
  },
  {
    path: 'privacidade',
    element: <Privacity />,
  },
]);

export default router;
