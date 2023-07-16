import { Hero } from '../../icons';

const HomeHero = () => {
  const DetailMainText = ({ text }) => {
    return <span className='text-4xl md:text-6xl text-amber-500'>{text}</span>;
  };

  const MainText = () => {
    return (
      <h2 className='md:mb-8 text-3xl md:text-5xl font-bold text-center leading-snug text-slate-600'>
        Sistema para Gerenciamento de <DetailMainText text='Frotas' /> para Postos de Combustíveis
      </h2>
    );
  };

  const Text = ({ className }) => {
    return (
      <p className={`text-slate-500 text-center ${className}`}>
        Tenha uma plataforma moderna para seu controle e dê autonomia para seus clientes!
      </p>
    );
  };

  const HeroImage = () => {
    return (
      <div className='px-3 w-full'>
        <div className='flex justify-center items-center'>
          <Hero className='h-96' />
        </div>
      </div>
    );
  };

  return (
    <section className='container flex flex-col md:flex-row items-center mx-auto pb-8 mt-32 md:mt-24'>
      <div className='px-3 w-full'>
        <MainText />
        <Text className='hidden md:flex' />
      </div>
      <HeroImage />
      <Text className='md:hidden' />
    </section>
  );
};

export default HomeHero;
