import { useState } from 'react';
import { Drawer, Footer, Header, Main } from './components';

const Page = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <Drawer isDrawerOpen={isDrawerOpen} />
      <Header toggleDrawer={toggleDrawer} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Page;
