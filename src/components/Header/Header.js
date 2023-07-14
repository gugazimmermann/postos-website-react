import HeaderLogo from './HeaderLogo';
import Menu from './Menu';
import Access from './Access';

const Header = () => {
  return (
    <header className='container'>
      <nav className='flex justify-between py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 px-8 md:px-3'>
        <HeaderLogo />
        <Menu />
        <Access />
      </nav>
    </header>
  );
};

export default Header;
