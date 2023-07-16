import { useState } from 'react';
import { Drawer, Footer, Header, Main } from '../components';

const Page = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <div className='flex flex-col min-h-screen'>
        <Header toggleDrawer={toggleDrawer} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
