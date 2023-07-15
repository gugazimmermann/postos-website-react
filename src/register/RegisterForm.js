import { Input, Label } from '../components';

const RegisterForm = () => {
  return (
    <form className='mt-8 space-y-6'>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Label htmlFor='document' text='CNPJ' />
          <Input name='document' />
        </div>
        <div>
          <Label htmlFor='name' text='Nome' />
          <Input name='name' />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div>
          <Label htmlFor='code' text='Código' />
          <Input name='code' />
        </div>
        <div>
          <Label htmlFor='email' text='Email' />
          <Input type='email' name='email' />
        </div>
        <div>
          <Label htmlFor='phone' text='Telefone' />
          <Input name='phone' />
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <Label htmlFor='address' text='Endedreço' />
          <Input name='address' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <Label htmlFor='city' text='Cidade' />
            <Input name='city' />
          </div>
          <div>
            <Label htmlFor='state' text='Estado' />
            <Input name='state' />
          </div>
        </div>
      </div>
      <button
        type='submit'
        className='w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Registrar
      </button>
    </form>
  );
};

export default RegisterForm;
