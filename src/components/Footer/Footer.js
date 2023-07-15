import { Facebook, Instagram, Threads, Twitter, Youtube, Linkedin } from '../../icons';

const Footer = () => {
  const Col = ({ children }) => <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>{children}</div>;

  const ColTitle = ({ text }) => (
    <div className='text-sm uppercase text-slate-50 font-bold mb-4'>{text}</div>
  );

  const ColItem = ({ text }) => (
    <div className='my-3 block text-slate-50 hover:text-slate-800 hover:font-bold hover:cursor-pointer text-sm'>
      {text}
    </div>
  );

  const SocialItem = ({ midia }) => {
    let icon = null;
    if (midia === 'facebook') icon = <Facebook />;
    if (midia === 'instagram') icon = <Instagram />;
    if (midia === 'threads') icon = <Threads />;
    if (midia === 'twitter') icon = <Twitter />;
    if (midia === 'youtube') icon = <Youtube />;
    if (midia === 'linkedin') icon = <Linkedin />;
    if (icon) {
      return <div className='text-slate-50 hover:text-slate-900 hover:cursor-pointer'>{icon}</div>;
    }
    return null;
  };

  return (
    <footer className='bg-amber-500 sm:mt-4 pt-4 w-full'>
      <div className='container m-auto flex flex-wrap justify-center text-center'>
        <Col>
          <ColTitle text='Sobre Nós' />
          <ColItem text='A Empresa' />
          <ColItem text='Área de Atuação' />
        </Col>
        <Col>
          <ColTitle text='Informações' />
          <ColItem text='Para a Organização' />
          <ColItem text='Para os Postos' />
          <ColItem text='Para o Cliente' />
          <ColItem text='Termos de Uso' />
        </Col>
        <Col>
          <ColTitle text={process.env.REACT_APP_TITLE} />
          <ColItem text='Atualizações' />
          <ColItem text='Solicitar Mudanças' />
          <ColItem text='Novos Relatórios' />
          <ColItem text='Personalizações' />
        </Col>
        <Col>
          <ColTitle text='Ajuda' />
          <ColItem text='FAQ' />
          <ColItem text='Biblioteca' />
          <ColItem text='Suporte' />
        </Col>
      </div>
      <div className='pt-2'>
        <div className='flex pb-5 px-3 pt-5 border-t border-slate-50 justify-center gap-4'>
          <SocialItem midia='facebook' />
          <SocialItem midia='instagram' />
          <SocialItem midia='threads' />
          <SocialItem midia='twitter' />
          <SocialItem midia='youtube' />
          <SocialItem midia='linkedin' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
