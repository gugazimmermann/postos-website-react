import { Link } from 'react-router-dom';

const NavItems = () => {
  const NavItem = ({ to, text }) => (
    <Link to={to} className='flex text-slate-800 hover:text-amber-500 hover:font-bold cursor-pointer transition-colors duration-300'>
      {text}
    </Link>
  );

  return (
    <>
      <NavItem to='/' text='Para os Postos' />
      <NavItem to='/' text='Para os Clientes' />
    </>
  );
};

export default NavItems;
