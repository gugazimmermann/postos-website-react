import { useState, useCallback, useEffect, useRef } from 'react';

const useModal = (props) => {
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const handleClickOutside = useCallback(
    (e) => {
      if (modalRef?.current) console.log(!modalRef.current.contains(e.target));
      if (modalRef?.current && !modalRef.current.contains(e.target)) closeModal();
    },
    [closeModal],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  const ModalContent = ({ title, children }) => {
    return (
      <div className='bg-white p-4'>
        {title && <h2 className='text-xl font-bold mb-4'>{title}</h2>}
        {children}
      </div>
    );
  };

  const SingleButton = ({ closeButton = 'Fechar' }) => {
    return (
      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-red-600 hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm'
          onClick={() => closeModal()}
        >
          {closeButton}
        </button>
      </div>
    );
  };

  const Modal = ({ title, buttonsType, closeButton, children }) => {
    if (!isModalOpen) return null;

    return (
      <div className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-screen px-4 text-center'>
          <div className='fixed inset-0 transition-opacity'>
            <div className='absolute inset-0 bg-gray-800 opacity-75' />
          </div>
          <div
            className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'
            ref={props.closeoutside ? modalRef : null}
          >
            <ModalContent title={title}>{children}</ModalContent>
            {(!buttonsType || buttonsType === 'single') && (
              <SingleButton closeButton={closeButton} />
            )}
          </div>
        </div>
      </div>
    );
  };

  return {
    openModal,
    Modal,
  };
};

export default useModal;
