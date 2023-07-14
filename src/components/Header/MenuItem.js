const MenuItem = ({ item }) => {
  return (
    <div className='flex text-slate-800 hover:text-amber-500 cursor-pointer transition-colors duration-300'>
      {item}
    </div>
  );
};

export default MenuItem;
