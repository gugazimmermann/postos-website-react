import { useModal } from '../../hooks';
import { Loading } from '../../icons';
import { ModalOpen } from '../../icons';

const OrganizationDataText = ({ name }) => {
  const { openModal, Modal } = useModal({ closeoutside: true });

  const MoreInfoButton = () => {
    return (
      <button
        onClick={openModal}
        className='text-amber-500 hover:underline hover:cursor-pointer text-lg justify-center md:justify-start inline-flex items-center gap-2'
      >
        Mais Informações
        <ModalOpen />
      </button>
    );
  };

  const nameText = (name) => {
    if (name) {
      return <span className='font-bold'>{name}</span>;
    }
    return <Loading className='text-amber-500' />;
  };

  return (
    <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full md:w-1/3'>
      <h1 className='text-3xl font-bold text-slate-800'>Cadastro no Sistema</h1>
      <p className='text-lg text-slate-500 inline'>
        {nameText(name)}, estamos quase lá, para finalizar complete os dados de acesso.
      </p>
      <MoreInfoButton />
      <Modal title='Mais Informações'>
        <div className='flex flex-col justify-center leading-6'>
          <p className='text-slate-800 mb-2'>
            <strong>Código da Organização</strong> é um código único que identica sua Organização para acessar o sistema.
          </p>
          <p className='text-slate-800 mb-2'>
            <strong>Usuário</strong> é o que identifica quem está acessando o sistema.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default OrganizationDataText;
