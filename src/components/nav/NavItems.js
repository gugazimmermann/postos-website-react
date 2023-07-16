import { NavLink } from 'react-router-dom';

const NavItems = () => {
  const NavItem = ({ to, text }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex ${
          isActive
            ? 'text-amber-500 font-bold'
            : 'cursor-pointer text-slate-800 hover:text-amber-500 hover:font-bold transition-colors duration-300'
        }`
      }
    >
      {text}
    </NavLink>
  );

  return (
    <>
      <NavItem to='/postos' text='Para os Postos' />
      <NavItem to='/clientes' text='Para os Clientes' />
    </>
  );
};

export default NavItems;
