import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className='flex flex-row items-center'>
      <img
        className='w-8 h-8 mr-2'
        src='/images/icon.png'
        alt={`${process.env.REACT_APP_TITLE} Logo`}
      />
      <span className='font-bold text-xl'>{process.env.REACT_APP_TITLE}</span>
    </Link>
  );
};

export default Logo;
