const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className='block mb-2 text-sm font-medium text-slate-800'>
      {text}
    </label>
  );
};

export default Label;
