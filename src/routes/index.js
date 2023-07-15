import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../home/Home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Home />}>
      <Route path='/' element={<Home />} />
    </Route>,
  ),
);

export default router;
