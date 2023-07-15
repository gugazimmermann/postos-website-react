import { Link } from 'react-router-dom';

const NavItems = () => {
  const NavItem = ({ to, text }) => (
    <Link to={to} className='flex text-slate-800 hover:text-amber-500 hover:font-bold cursor-pointer transition-colors duration-300'>
      {text}
    </Link>
  );

  return (
    <>
      <NavItem to='/' text='Início' />
      <NavItem to='/' text='Para o Posto' />
      <NavItem to='/' text='Para o Cliente' />
      <NavItem to='/' text='Sobre Nós' />
    </>
  );
};

export default NavItems;
