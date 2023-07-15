import { Input, Label } from '../components';

const RegisterForm = () => {
  const Row = ({ children }) => {
    return <div className='mb-4 md:mb-0'>{children}</div>;
  };

  const Button = () => {
    return (
      <div className='w-full text-center'>
        <button
          type='submit'
          className='w-2/3 px-5 py-3 text-base font-medium text-center text-slate-50 bg-amber-500 rounded-lg hover:bg-amber-600'
        >
          Registrar
        </button>
      </div>
    );
  };

  return (
    <form className='mt-8 space-y-6'>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        <Row>
          <Label htmlFor='document' text='CNPJ' />
          <Input name='document' />
        </Row>
        <Row>
          <Label htmlFor='name' text='Nome' />
          <Input name='name' />
        </Row>
      </div>
      <div className='md:grid md:grid-cols-3 md:gap-4'>
        <Row>
          <Label htmlFor='code' text='Código' />
          <Input name='code' />
        </Row>
        <Row>
          <Label htmlFor='email' text='Email' />
          <Input type='email' name='email' />
        </Row>
        <Row>
          <Label htmlFor='phone' text='Telefone' />
          <Input name='phone' />
        </Row>
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        <Row>
          <Label htmlFor='address' text='Endedreço' />
          <Input name='address' />
        </Row>
        <div className='grid grid-cols-2 gap-4'>
          <Row>
            <Label htmlFor='city' text='Cidade' />
            <Input name='city' />
          </Row>
          <Row>
            <Label htmlFor='state' text='Estado' />
            <Input name='state' />
          </Row>
        </div>
      </div>
      <Button />
    </form>
  );
};

export default RegisterForm;
