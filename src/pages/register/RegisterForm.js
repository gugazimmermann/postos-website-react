import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidCNPJ, isValidEmail, masks, statesBR } from '../../helpers';
import { Alert, Button, Input, Label, Select } from '../../components';

const Row = ({ children }) => <div className='mb-4 md:mb-0'>{children}</div>;

const Grid = ({ children }) => <div className='md:grid md:grid-cols-2 md:gap-4'>{children}</div>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const resetForm = () => {
    setDocument('');
    setName('');
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
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const data = {
      document,
      name,
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
      resetForm();
      setLoading(false);
      navigate(`cadastro/codigo/${12345678}`, { state: email });
    }, 5000);
  };

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <Grid>
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
        </Grid>
        <Grid>
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
        </Grid>
        <Grid>
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
          <Grid>
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
              <Select
                loading={loading}
                value={state}
                editValue={(e) => setState(e.target.value)}
                required={true}
                name='state'
                data={statesBR}
              />
            </Row>
          </Grid>
        </Grid>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Registrar' />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
