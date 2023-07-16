import { Page } from '../general';
import Content from './Content';
import Hero from './Hero';
import HomeParallax from './HomeParallax';

const Home = () => {
  return (
    <Page>
      <Hero />
      <HomeParallax />
      <Content />
    </Page>
  );
};

export default Home;
