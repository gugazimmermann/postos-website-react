const Logo = () => {
  return (
    <div className='flex flex-row items-center'>
      <img
        className='w-8 h-8 mr-2'
        src='/images/icon.png'
        alt={`${process.env.REACT_APP_TITLE} Logo`}
      />
      <span className='font-bold text-xl'>{process.env.REACT_APP_TITLE}</span>
    </div>
  );
};

export default Logo;
