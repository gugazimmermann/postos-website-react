import HeroText from './HeroText';
import HeroImage from './HeroImage';

const HomeHero = () => {
  return (
    <section className='container flex items-center mx-auto w-full pb-8'>
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default HomeHero;
