import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className='items-center space-x-8 justify-center flex'>
      <MenuItem item='Início' />
      <MenuItem item='Para o Posto' />
      <MenuItem item='Para o Cliente' />
      <MenuItem item='Sobre Nós' />
    </div>
  );
};

export default Menu;
