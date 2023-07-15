const Input = ({ loading, value, editValue, disabled = false, required = true, type = 'text', name }) => {
  return (
    <input
      required={required}
      disabled={disabled ? disabled : loading}
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={editValue}
      className='bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg block w-full p-2.5'
    />
  );
};

export default Input;
