import { useState } from 'react';
import { isValidCNPJ, isValidEmail, masks } from '../helpers';
import { Alert, Button, Input, Label } from '../components';

const Row = ({ children }) => <div className='mb-4 md:mb-0'>{children}</div>;

const RegisterForm = () => {
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const resetForm = () => {
    setDocument('');
    setName('');
    setCode('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setState('');
  };

  const validate = (data) => {
    if (
      !data.document ||
      !data.name ||
      !data.code ||
      !data.email ||
      !data.phone ||
      !data.address ||
      !data.city ||
      !data.state
    )
      return 'Todos os campos são obrigatórios!';
    if (!isValidCNPJ(data.document)) return 'CNPJ inválido!';
    if (!isValidEmail(data.email)) return 'Email inválido!';
    if (data?.name?.length < 3) return 'Nome deve ter mínimo de 3 caracteres!';
    if (data?.code?.length < 3) return 'Código deve ter mínimo de 3 caracteres!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const data = {
      document,
      name,
      code,
      email,
      phone,
      address,
      city,
      state,
    };
    const validationError = validate(data);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    setTimeout(() => {
      console.log();
      resetForm();
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <div className='md:grid md:grid-cols-2 md:gap-4'>
          <Row>
            <Label htmlFor='document' text='CNPJ' />
            <Input
              loading={loading}
              value={masks.cnpj(document)}
              editValue={(e) => setDocument(masks.cnpj(e.target.value))}
              required={true}
              name='document'
            />
          </Row>
          <Row>
            <Label htmlFor='name' text='Nome' />
            <Input
              loading={loading}
              value={name}
              editValue={(e) => setName(e.target.value)}
              required={true}
              name='name'
            />
          </Row>
        </div>
        <div className='md:grid md:grid-cols-3 md:gap-4'>
          <Row>
            <Label htmlFor='code' text='Código' />
            <Input
              loading={loading}
              value={masks.code(code)}
              editValue={(e) => setCode(masks.code(e.target.value))}
              required={true}
              name='code'
            />
          </Row>
          <Row>
            <Label htmlFor='email' text='Email' />
            <Input
              loading={loading}
              value={email}
              editValue={(e) => setEmail(e.target.value)}
              required={true}
              type='email'
              name='email'
            />
          </Row>
          <Row>
            <Label htmlFor='phone' text='Telefone' />
            <Input
              loading={loading}
              value={masks.phone(phone)}
              editValue={(e) => setPhone(masks.phone(e.target.value))}
              required={true}
              name='phone'
            />
          </Row>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-4'>
          <Row>
            <Label htmlFor='address' text='Endedreço' />
            <Input
              loading={loading}
              value={address}
              editValue={(e) => setAddress(e.target.value)}
              required={true}
              name='address'
            />
          </Row>
          <div className='grid grid-cols-2 gap-4'>
            <Row>
              <Label htmlFor='city' text='Cidade' />
              <Input
                loading={loading}
                value={city}
                editValue={(e) => setCity(e.target.value)}
                required={true}
                name='city'
              />
            </Row>
            <Row>
              <Label htmlFor='state' text='Estado' />
              <Input
                loading={loading}
                value={state}
                editValue={(e) => setState(e.target.value)}
                required={true}
                name='state'
              />
            </Row>
          </div>
        </div>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Registrar' />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
