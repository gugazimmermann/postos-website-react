import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { isValidEmail } from '../../helpers';
import { Alert, Button, Input, TextArea, Label, Row, Col2 } from '../../components';

const ContactForm = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const validate = (form) => {
    if (!form.name || !form.email || !form.message) return 'Todos os campos são obrigatórios!';
    if (!isValidEmail(form.email)) return 'Email inválido!';
    if (form?.name?.length < 3) return 'Nome deve ter mínimo de 3 caracteres!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = { name, email, message };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    const data = await api.contact(form);
    if (data?.message === 'Message sent successfully!') {
      setLoading(false);
      resetForm();
      navigate(`/contato/sucesso`);
    } else {
      setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
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
            <Label htmlFor='name' text='Nome' />
            <Input
              loading={loading}
              value={name}
              editValue={(e) => setName(e.target.value)}
              required={true}
              name='name'
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
        </Col2>
        <Row>
          <Label htmlFor='message' text='Mensagem' />
          <TextArea
            loading={loading}
            value={message}
            editValue={(e) => setMessage(e.target.value)}
            required={true}
            name='message'
          />
        </Row>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Enviar' />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
