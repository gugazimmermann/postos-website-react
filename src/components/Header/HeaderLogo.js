const HeaderLogo = () => {
  return (
    <div className='flex flex-row items-center'>
      <img
        className='w-8 h-8 mr-2'
        src='/images/icon.png'
        alt={`${process.env.REACT_APP_TITLE} Logo`}
      />
      <span className='text-slate-950'>{process.env.REACT_APP_TITLE}</span>
    </div>
  );
};

export default HeaderLogo;
