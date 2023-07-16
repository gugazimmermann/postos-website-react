import { Loading } from '../../icons';

const OrganizationDataText = ({ name }) => {
  const nameText = (name) => {
    if (name) {
      return <span className='font-bold'>{name}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full md:w-1/3'>
      <h1 className='text-3xl font-bold text-slate-800'>Dados de Acesso</h1>
      <p className='text-lg text-slate-500 inline'>
       {nameText(name)}, estamos quase lá, para finalizar complete os dados de acesso.
      </p>
    </div>
  );
};

export default OrganizationDataText;
