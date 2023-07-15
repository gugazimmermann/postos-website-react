import HeroButton from './HeroButton';

const HeroText = () => {
  return (
    <div className='px-3 w-full'>
      <div className=' mb-8'>
        <h2 className='mb-4 text-3xl font-bold text-left lg:text-5xl text-slate-700'>
          Sistema para Gerenciamento de
          <span className='text-5xl text-amber-500 mx-4'>Frotas</span>
          para Postos de Combustíveis
        </h2>
        <p className='text-slate-600'>Tenha uma plataforma moderna para seu controle e dê autonomia para seus clientes!</p>
      </div>
      <HeroButton />
    </div>
  );
};

export default HeroText;
