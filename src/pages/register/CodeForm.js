import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { masks } from '../../helpers';
import { Alert, Button, Input } from '../../components';

const CodeForm = ({ id, email, confirmationCode = '' }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(confirmationCode);

  const resetForm = () => setCode(confirmationCode);

  const validate = (form) => {
    if (!form.code) return 'Código de Confirmação é obrigatório!';
    if (form.code?.length < 6) return 'Código de Confirmação deve ter mínimo de 6 caracteres!';
    if (!form.id) return 'Ocorreu um erro, tente acessar a página novamente!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = { id, code };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    const data = await api.confirmOrganization(form);
    if (data.id) {
      setLoading(false);
      resetForm();
      navigate(`/cadastro/sucesso/${data.id}`);
    } else {
      if (data === 'Code not found.' || data === 'Wrong Code!') {
        setAlert('Código de Confirmação inválido.');
      } else {
        setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
      }
      setLoading(false);
      return;
    }
  };

  useEffect(() => setLoading(!email), [email]);

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <Input
          loading={loading}
          value={masks.confirmationCode(code)}
          editValue={(e) => setCode(masks.confirmationCode(e.target.value))}
          required={true}
          name='code'
        />
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Validar' />
        </div>
      </form>
    </>
  );
};

export default CodeForm;
