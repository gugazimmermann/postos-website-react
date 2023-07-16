import { Loading } from '../../icons';

const CodeText = ({ email }) => {
  const emailText = (email) => {
    if (email) {
      return <span className='font-bold'>{email}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full md:w-1/3'>
      <h1 className='text-3xl font-bold text-slate-800'>Validar Email</h1>
      <p className='text-lg text-slate-500 inline'>
        Para validar seu email, por favor, acesse {emailText(email)} e valide o Código de
        Confirmação.
      </p>
    </div>
  );
};

export default CodeText;
