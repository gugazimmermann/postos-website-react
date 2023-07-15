import Logo from './Logo';
import Nav from '../nav/Nav';
import Access from './Access';
import { Bars } from '../../icons';

const Header = ({ toggleDrawer }) => {
  return (
    <header className='bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10'>
      <div className='flex flex-row justify-between items-center px-4'>
        <div className='flex flex-col flex-grow items-center gap-4 py-4 md:flex-row md:justify-between md:px-4'>
          <Logo />
          <Nav />
          <Access />
        </div>
        <Bars className='h-8 w-8 md:hidden' onClick={toggleDrawer} />
      </div>
    </header>
  );
};

export default Header;
