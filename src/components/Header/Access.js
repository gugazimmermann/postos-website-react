import { Login, Register } from '../../icons';

const Access = () => {
  const LoginButton = () => {
    return (
      <a
        className='flex cursor-pointer font-semibold text-amber-500'
        href={process.env.REACT_APP_APP_URL}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Login />
        Entrar
      </a>
    );
  };

  const RegisterButton = () => {
    return (
      <div className='flex text-slate-800 hover:text-amber-500 cursor-pointer transition-colors duration-300'>
        <Register />
        Cadastro
      </div>
    );
  };

  return (
    <div className='items-center space-x-5 flex'>
      <RegisterButton />
      <LoginButton />
    </div>
  );
};

export default Access;
