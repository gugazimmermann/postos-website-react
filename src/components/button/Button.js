import { Loading } from '../../icons';

const Button = ({ type = 'button', loading, text }) => {
  return (
    <button
      disabled={loading}
      type={type}
      className={`w-2/3 text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 inline-flex items-center`}
    >
      <div className='text-center w-full'>
        {loading && <Loading />}
        {!loading ? text : 'Aguarde'}
      </div>
    </button>
  );
};

export default Button;
