const Card = ({ title, children }) => {
  return (
    <div className='w-2/3 p-6 space-y-8 bg-white rounded-lg shadow-xl'>
      <h2 className='text-2xl font-bold text-slate-800'>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
