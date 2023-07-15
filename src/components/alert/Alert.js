const Alert = ({ type, text }) => {
  return (
    <div
      className={`p-4 rounded-lg ${
        type === 'error'
          ? 'bg-red-50 text-red-800'
          : type === 'warning'
          ? 'bg-amber-50 text-amber-800'
          : 'bg-emerald-50 text-emerald-800'
      }`}
      role='alert'
    >
      {text}
    </div>
  );
};

export default Alert;
