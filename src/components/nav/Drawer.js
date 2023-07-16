import { useCallback, useEffect, useRef } from 'react';
import NavItems from './NavItems';

const Drawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const drawerRef = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) setIsDrawerOpen(false);
    },
    [setIsDrawerOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div
      ref={drawerRef}
      className={`fixed top-0 left-0 w-64 bg-white h-full transform ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform ease-in-out duration-300 shadow-lg z-50 md:hidden`}
    >
      <div className='p-4 flex flex-col gap-4'>
        <NavItems />
      </div>
    </div>
  );
};

export default Drawer;
