import { Hero } from '../icons';
import HeroText from './HeroText';

const HomeHero = () => {
  const HeroImage = () => {
    return (
      <div className='px-3 mb-12 w-full lg:mb-0 lg:w-3/5'>
        <div className='flex justify-center items-center'>
          <Hero className='h-96' />
        </div>
      </div>
    );
  };

  return (
    <section className='container flex items-center mx-auto w-full pb-8'>
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default HomeHero;
