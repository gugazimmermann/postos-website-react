import { Arrow } from '../../icons';

const RegisterText = () => {
  const PaymentsButton = () => {
    return (
      <div className='text-amber-500 hover:underline hover:cursor-pointer text-lg justify-center md:justify-start inline-flex items-center'>
        Saiba mais sobre Cobrança
        <Arrow />
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full md:w-1/3'>
      <h1 className='text-3xl font-bold text-slate-800'>Cadastro de Organização</h1>
      <p className='text-lg text-slate-500'>
        Faço o cadastro para liberar seu acesso ao sistema, não se preocupe, você somente terá
        cobrança quando seus clientes começarem a abastecer.
      </p>
      <PaymentsButton />
    </div>
  );
};

export default RegisterText;
