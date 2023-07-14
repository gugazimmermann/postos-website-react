import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Content from './Content';
import Hero from './Hero';
import HomeParallax from './HomeParallax';

const Home = () => {
  return (
    <>
    <main className='flex flex-col items-center justify-center mt-32'>
      <Header />
      <Hero />
      <HomeParallax />
      <Content />
    </main>
    <Footer />
    </>
  );
};

export default Home;
