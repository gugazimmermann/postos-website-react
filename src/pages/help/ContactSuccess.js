import { Page } from '../general';

const ContactSuccess = () => {
  return (
    <Page>
      <section className='max-w-6xl m-auto flex flex-col px-4 md:px-0 mt-32 md:mt-24 mb-8 md:mb-16 md:flex-row gap-4 md:gap-8'>
      <div className='flex flex-col justify-center text-center md:text-left gap-4 w-full'>
      <h1 className='text-3xl font-bold text-slate-800'>Mensagem Enviada</h1>
      <p className='text-lg text-slate-500 inline'>
        Sua mensagem foi enviada com sucesso, entraremos em contato em breve.
      </p>
    </div>
      </section>
    </Page>
  );
};

export default ContactSuccess;
