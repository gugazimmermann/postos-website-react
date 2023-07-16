import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import Register from '../pages/register/Register';
import RegisterCode from '../pages/register/Code';
import RegisterLogin from '../pages/register/Login';
import RegisterSuccess from '../pages/register/Success';
import GasStations from '../pages/gas-stations/GasStations';
import Companies from '../pages/companies/Companies';
import AboutUs from '../pages/about-us/AboutUs';
import Work from '../pages/about-us/Work';
import Personalization from '../pages/system/Personalization';
import NewReports from '../pages/system/NewReports';
import UsageTerms from '../pages/information/UsageTerms';
import Privacity from '../pages/information/Privacity';
import FAQ from '../pages/help/FAQ';

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
    path: 'empresa',
    element: <AboutUs />,
  },
  {
    path: 'vagas',
    element: <Work />,
  },
  {
    path: 'personalizacoes',
    element: <Personalization />,
  },
  {
    path: 'novos-relatorios',
    element: <NewReports />,
  },
  {
    path: 'termos-de-uso',
    element: <UsageTerms />,
  },
  {
    path: 'privacidade',
    element: <Privacity />,
  },
  {
    path: 'faq',
    element: <FAQ />,
  },
]);

export default router;
