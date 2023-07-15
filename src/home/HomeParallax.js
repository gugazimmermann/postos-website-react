const HomeParallax = () => {
  const Item = ({ text }) => {
    return <div className='text-white/90 hover:text-white'>{text}</div>;
  };

  const Divider = () => <hr className='my-4' />;

  return (
    <section
      className='flex flex-col w-full h-500 bg-cover bg-fixed bg-center justify-center items-center relative'
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/05/42/17/70/360_F_542177036_v12rYhGPt06ZrbVyLHenryRtsHc6r2S5.jpg')`,
      }}
    >
      <h1 className='text-white text-5xl font-semibold mt-20 mb-10'>
        {process.env.REACT_APP_TITLE}
      </h1>
      <div className='text-center font-bold my-20 text-white/90'>
        <Item text='Relatórios em tempo real' />
        <Divider />
        <Item text='Notificações para o Cliente' />
        <Divider />
        <Item text='Controle Total' />
      </div>
    </section>
  );
};

export default HomeParallax;
