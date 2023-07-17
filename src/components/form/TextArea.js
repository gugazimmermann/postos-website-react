const TextArea = ({ loading, value, editValue, disabled = false, required = true, name }) => {
  return (
    <textarea
      required={required}
      disabled={disabled ? disabled : loading}
      name={name}
      id={name}
      value={value}
      onChange={editValue}
      className='bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg block w-full p-2.5'
      rows="10"
    />
  );
};

export default TextArea;
