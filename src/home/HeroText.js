const HeroText = () => {
  const DetailMainText = ({ text }) => {
    return <span className='text-6xl text-amber-500'>{text}</span>;
  };

  const MainText = () => {
    return (
      <h2 className='mb-4 text-5xl font-bold text-center leading-snug text-slate-600'>
        Sistema para Gerenciamento de <DetailMainText text='Frotas' /> para Postos de Combustíveis
      </h2>
    );
  };

  const Text = () => {
    return (
      <p className='text-slate-500 text-base'>
        Tenha uma plataforma moderna para seu controle e dê autonomia para seus clientes!
      </p>
    );
  };

  // const Button = () => {
  //   return (
  //     <div className='text-center'>
  //       <div className='block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-slate-50 bg-amber-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block'>
  //         Saiba Mais
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className='px-3 w-full'>
      <div className=' mb-8'>
        <MainText />
        <Text />
      </div>
      {/* <Button /> */}
    </div>
  );
};

export default HeroText;
