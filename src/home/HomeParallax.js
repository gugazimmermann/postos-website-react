const HomeParallax = () => {
  const Item = ({ text }) => {
    return <div className='text-white/90 hover:text-white'>{text}</div>;
  };

  const Divider = () => <hr className='my-4' />;

  return (
<section
      className='flex flex-col w-full h-500 bg-cover bg-fixed bg-center justify-center items-center relative'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1612725718815-64705bf42363?auto=format&fit=crop&w=880&q=100')`,
      }}
    >
      <h1 className='text-amber-500 text-5xl font-semibold mt-20 mb-10'>{process.env.REACT_APP_TITLE}</h1>
      <div className='text-center font-bold my-20 text-white/90'>
        <Item text='Relatórios em tempo real' />
        <Divider />
        <Item text='Notificações o Cliente' />
        <Divider />
        <Item text='Controle Total' />
      </div>
    </section>
  );
};

export default HomeParallax;
