import Page from '../Page';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Page>
      <section className='container flex justify-center px-6 py-32 mx-auto'>
        <div>
          <p className='font-medium text-amber-500'>404 error</p>
          <h1 className='mt-3 text-2xl font-semibold text-slate-800 md:text-3xl'>
            Página Não Encontrada
          </h1>
          <p className='mt-4 text-slate-500'>
            Desculpe, a página que você está acessando não existe.
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <Link
              to={-1}
              className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-slate-800 bg-white rounded-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>
              <span>Voltar</span>
            </Link>
            <Link
              to='/'
              className='w-1/2 px-5 py-2 text-sm tracking-wide text-white bg-amber-500 rounded-lg shrink-0 sm:w-auto'
            >
              Ir para o Início
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default NotFound;
