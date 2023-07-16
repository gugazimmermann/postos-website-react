import { useModal } from '../../hooks';
import { PaymentText, PaymentTable } from '../payment';
import { ModalOpen } from '../../icons';

const RegisterText = () => {
  const { openModal, Modal } = useModal({ closeoutside: true });

  const PaymentsButton = () => {
    return (
      <button
        onClick={openModal}
        className='text-amber-500 hover:underline hover:cursor-pointer text-lg justify-center md:justify-start inline-flex items-center gap-2'
      >
        Saiba mais sobre Cobrança
        <ModalOpen />
      </button>
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
      <Modal title='Cobrança'>
        <PaymentText />
        <PaymentTable />
      </Modal>
    </div>
  );
};

export default RegisterText;
