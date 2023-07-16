import { Arrow, Loading } from '../../icons';

const SuccessText = ({ code, name, login, email }) => {
  const AccessButton = ({ code }) => {
    return (
      <a
        className='text-amber-500 hover:underline hover:cursor-pointer text-lg justify-center md:justify-start inline-flex items-center'
        href={`${process.env.REACT_APP_APP_URL}/${code}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        Acessar {process.env.REACT_APP_TITLE}
        <Arrow />
      </a>
    );
  };

  const nameText = (name) => {
    if (name) {
      return <span className='font-bold'>{name}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  const emailText = (email) => {
    if (email) {
      return <span className='font-bold'>{email}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  const loginText = (login) => {
    if (login) {
      return <span className='font-bold'>{login}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  const codeText = (code) => {
    if (code) {
      return <span className='font-bold'>{code}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full'>
      <h1 className='text-3xl font-bold text-slate-800'>Cadastro Concluído</h1>
      <p className='text-lg text-slate-500 inline'>
        {nameText(name)}, seu cadastro foi concluído com sucesso e seus dados foram enviados para{' '}
        {emailText(email)}.
      </p>
      <p className='text-lg text-slate-500 inline'>
        Para acessar o sistema, utilize os dados abaixo:
      </p>
      <p className='text-lg text-slate-500 inline'>Código da Organização: {codeText(code)}</p>
      <p className='text-lg text-slate-500 inline'>Usuário: {loginText(login)}</p>
      {code && <AccessButton code={code} />}
    </div>
  );
};

export default SuccessText;
