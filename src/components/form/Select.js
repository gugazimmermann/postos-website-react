const Select = ({ loading, value, editValue, disabled = false, required = true, name, data }) => {
  return (
    <select
      required={required}
      disabled={disabled ? disabled : loading}
      name={name}
      id={name}
      value={value}
      onChange={editValue}
      className='bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg block w-full p-2.5'
    >
      <option value=''>...</option>
      {data.map((d) => (
        <option key={d.id} value={d.id}>
          {d.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
