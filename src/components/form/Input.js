const Input = ({ type, name }) => {
  return (
    <input
      required
      type={type ? type : 'text'}
      name={name}
      id={name}
      className='bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg block w-full p-2.5'
    />
  );
};

export default Input;
