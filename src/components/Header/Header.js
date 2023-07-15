import Logo from './Logo';
import Nav from './Nav';
import Access from './Access';

const Header = () => {
  return (
    <header className='bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10'>
      <div className='flex justify-between py-4 px-3'>
        <Logo />
        <Nav />
        <Access />
      </div>
    </header>
  );
};

export default Header;
