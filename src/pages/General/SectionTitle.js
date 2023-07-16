const SectionTitle = ({ title, word }) => {
  return (
    <h2 className='text-2xl font-semibold text-slate-800  md:text-3xl'>
      {title} <span className='text-amber-500'>{word}</span>
    </h2>
  );
};

export default SectionTitle;
