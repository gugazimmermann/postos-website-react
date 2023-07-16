import { Link } from 'react-router-dom';
import { Whatsapp, Facebook, Instagram, Threads, Twitter, Youtube, Linkedin } from '../../icons';
import Logo from '../logo/Logo';

const MainCol = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center p-4'>
        <Logo />
        <p className='text-slate-500 mt-2 text-center md:text-right md:mt-0'>
          Sistema para Gerenciamento de Frotas para Postos de Combustíveis
        </p>
      </div>
      <hr className='border-slate-200' />
    </div>
  );
};

const ColumnTitle = ({ title }) => (
  <h3 className='text-gray-800 text-sm uppercase font-bold'>{title}</h3>
);

const Column = ({ title, items }) => {
  return (
    <div>
      <ColumnTitle title={title} />
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.link}
          className='block mt-2 text-sm text-gray-500 hover:underline hover:cursor-pointer'
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

const ContactColumn = () => {
  return (
    <div>
      <ColumnTitle title='Contato' />
      <a
        href='https://wa.me/5547988704247'
        className='block mt-2 text-sm text-gray-500 hover:underline hover:cursor-pointer'
      >
        WhatsApp
      </a>
      <a href='tel:+5547988704247' className='block mt-2 text-sm text-gray-500'>
        (47) 98870-4247
      </a>
      <a
        href='mailto:contato@touchsistemas.com.br'
        className='block mt-2 text-sm text-gray-500 hover:underline hover:cursor-pointer'
      >
        contato@touchsistemas.com.br
      </a>
    </div>
  );
};

const SocialRow = () => {
  const SocialIcon = ({ name }) => {
    let icon = null;
    if (name === 'Whatsapp') icon = <Whatsapp />;
    if (name === 'Facebook') icon = <Facebook />;
    if (name === 'Instagram') icon = <Instagram />;
    if (name === 'Threads') icon = <Threads />;
    if (name === 'Twitter') icon = <Twitter />;
    if (name === 'Youtube') icon = <Youtube />;
    if (name === 'Linkedin') icon = <Linkedin />;
    if (icon) {
      return (
        <div className='mx-2 text-slate-500 hover:text-slate-800 hover:cursor-pointer'>{icon}</div>
      );
    }
    return null;
  };

  const SocialItem = ({ name, linkTo }) => {
    return (
      <a href={linkTo} target='_blank' rel='noopener noreferrer' aria-label={name}>
        <SocialIcon name={name} />
      </a>
    );
  };

  return (
    <div className='flex mt-6 justify-center'>
      <SocialItem name='Whatsapp' linkTo='https://wa.me/5547988704247' />
      <SocialItem name='Facebook' linkTo='https://www.facebook.com/' />
      <SocialItem name='Instagram' linkTo='https://www.instagram.com/' />
      <SocialItem name='Threads' linkTo='https://www.threads.net/' />
      <SocialItem name='Twitter' linkTo='https://www.twitter.com/' />
      <SocialItem name='Youtube' linkTo='https://www.youtube.com/' />
      <SocialItem name='Linkedin' linkTo='https://www.linkedin.com/' />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='container mx-auto mb-4'>
        <MainCol />
        <div className='flex flex-wrap justify-between gap-4 mt-4'>
          <Column
            title='Sobre Nós'
            items={[
              {
                name: 'A Empresa',
                link: '/',
              },
              {
                name: 'Trabalhe Conosco',
                link: '/',
              },
            ]}
          />
          <Column
            title='Informações'
            items={[
              {
                name: 'Termos de Uso',
                link: '/',
              },
              {
                name: 'Privacidade',
                link: '/',
              },
            ]}
          />
          <Column
            title='O Sistema'
            items={[
              {
                name: 'Personalizações',
                link: '/',
              },
              {
                name: 'Novos Relatórios',
                link: '/',
              },
            ]}
          />
          <Column
            title='Ajuda'
            items={[
              {
                name: 'FAQ',
                link: '/',
              },
              {
                name: 'Suporte',
                link: '/',
              },
            ]}
          />
          <ContactColumn />
        </div>
        <SocialRow />
      </div>
    </footer>
  );
};

export default Footer;
