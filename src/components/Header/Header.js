import Logo from './Logo';
import Nav from './Nav';
import Access from './Access';

const Header = () => {
  return (
    <header>
      <div className='flex justify-between py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 px-8 md:px-3'>
        <Logo />
        <Nav />
        <Access />
      </div>
    </header>
  );
};

export default Header;
