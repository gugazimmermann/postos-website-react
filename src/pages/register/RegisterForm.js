import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { useModal } from '../../hooks';
import { isValidCNPJ, isValidEmail, masks, statesBR } from '../../helpers';
import { Alert, Button, Input, Label, Select, Row, Col2 } from '../../components';
import { UsageTermsText, PrivacityText } from '../information';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { openModal: openUsageTermsModal, Modal: UsageTermsyModal } = useModal({
    closeoutside: true,
  });
  const { openModal: openPrivacityModal, Modal: PrivacityModal } = useModal({ closeoutside: true });
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [accept, setAccept] = useState(false);

  const resetForm = () => {
    setDocument('');
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setState('');
  };

  const validate = (form) => {
    if (!form.accept) return 'É necessário aceitar os Termos de Uso e Privacidade!';
    if (
      !form.document ||
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.state
    )
      return 'Todos os campos são obrigatórios!';
    if (!isValidCNPJ(form.document)) return 'CNPJ inválido!';
    if (!isValidEmail(form.email)) return 'Email inválido!';
    if (form?.name?.length < 3) return 'Nome deve ter mínimo de 3 caracteres!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = {
      accept,
      document,
      name,
      email,
      phone,
      address,
      city,
      state,
    };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    const data = await api.saveOrganization(form);
    if (data?.id) {
      setLoading(false);
      resetForm();
      navigate(`/cadastro/login/${data.id}`);
    } else {
      if (data === 'Email is already in registered.') {
        setAlert('Email já está cadastrado.');
      } else if (data === 'Document is already in registered.') {
        setAlert('CNPJ já está cadastrado.');
      } else {
        setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
      }
      setLoading(false);
      return;
    }
  };

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <Col2>
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
        </Col2>
        <Col2>
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
        </Col2>
        <Col2>
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
          <Col2>
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
          </Col2>
        </Col2>
        <Row>
          <div className='flex items-center'>
            <input
              id='accept-checkbox'
              type='checkbox'
              checked={accept}
              onChange={(e) => setAccept(e.target.checked)}
              className='w-4 h-4 rounded'
            />
            <label
              htmlFor='accept-checkbox'
              className='ml-2 text-sm font-medium text-slate-800 inline-flex'
            >
              Li e concordo com os
              <button
                type='button'
                onClick={openUsageTermsModal}
                className='text-amber-500 hover:underline mx-1'
              >
                Termos de Uso
              </button>
              e
              <button
                type='button'
                onClick={openPrivacityModal}
                className='text-amber-500 hover:underline ml-1'
              >
                Privacidade
              </button>
              .
            </label>
          </div>
          <UsageTermsyModal title='Termos de Uso' scroll={true}>
            <UsageTermsText />
          </UsageTermsyModal>
          <PrivacityModal title='Políticas de Privacidade' scroll={true}>
            <PrivacityText />
          </PrivacityModal>
        </Row>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Registrar' />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
