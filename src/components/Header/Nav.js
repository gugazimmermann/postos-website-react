const Nav = () => {
  const NavItem = ({ item }) => (
    <div className='flex text-slate-800 hover:text-amber-500 hover:font-bold cursor-pointer transition-colors duration-300'>
      {item}
    </div>
  );

  return (
    <nav className='items-center space-x-8 justify-center flex'>
      <NavItem item='Início' />
      <NavItem item='Para o Posto' />
      <NavItem item='Para o Cliente' />
      <NavItem item='Sobre Nós' />
    </nav>
  );
};

export default Nav;
