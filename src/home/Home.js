import { Footer, Header, Main } from '../components';
import Content from './Content';
import Hero from './Hero';
import HomeParallax from './HomeParallax';

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <HomeParallax />
        <Content />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
