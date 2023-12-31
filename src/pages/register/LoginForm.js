import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api';
import { masks } from '../../helpers';
import { Alert, Button, Input, Label, Row, Col2 } from '../../components';

const LoginForm = ({ id, name }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const resetForm = () => {
    setCode('');
    setLogin('');
    setPassword('');
    setRepeatPassword('');
  };

  const validate = (form) => {
    if (!form.id) return 'Ocorreu um erro, tente acessar a página novamente!';
    if (!form.code || !form.login || !form.password || !form.repeatPassword)
      return 'Todos os campos são obrigatórios!';
    if (form.password?.code < 3) return 'Código deve ter mínimo de 3 caracteres!';
    if (form.password?.login < 3) return 'Usuário deve ter mínimo de 3 caracteres!';
    if (form.password?.length < 3) return 'Senha deve ter mínimo de 3 caracteres!';
    if (form.password !== form.repeatPassword) return 'Senhas são diferentes!';
    return false;
  };

  const handleSubmit = async (e) => {
    setAlert();
    e.preventDefault();
    setLoading(true);
    const form = { id, code, login, password, repeatPassword };
    const validationError = validate(form);
    if (validationError) {
      setAlert(validationError);
      setLoading(false);
      return;
    }
    const data = await api.saveOrganizationLogin(form);
    if (data?.id) {
      setLoading(false);
      resetForm();
      navigate(`/cadastro/codigo/${data.id}`);
    } else {
      if (data === 'Code is already in registered.') {
        setAlert('Código da Organização já está cadastrado.');
      } else {
        setAlert('Ocorreu um erro no envio do formulário, tente novamente.');
      }
      setLoading(false);
      return;
    }
  };

  useEffect(() => setLoading(!name), [name]);

  return (
    <>
      {alert && <Alert type='error' text={alert} />}
      <form onSubmit={(e) => handleSubmit(e)} className='mt-8 space-y-6'>
        <Col2>
          <Row>
            <Label htmlFor='code' text='Código da Organização' />
            <Input
              loading={loading}
              value={masks.code(code)}
              editValue={(e) => setCode(masks.code(e.target.value))}
              required={true}
              name='code'
            />
          </Row>
          <Row>
            <Label htmlFor='login' text='Usuário' />
            <Input
              loading={loading}
              value={login}
              editValue={(e) => setLogin(e.target.value)}
              required={true}
              name='login'
            />
          </Row>
        </Col2>
        <Col2>
          <Row>
            <Label htmlFor='password' text='Senha' />
            <Input
              loading={loading}
              value={password}
              editValue={(e) => setPassword(e.target.value)}
              required={true}
              name='password'
              type='password'
            />
          </Row>
          <Row>
            <Label htmlFor='repeatPassword' text='Repita a Senha' />
            <Input
              loading={loading}
              value={repeatPassword}
              editValue={(e) => setRepeatPassword(e.target.value)}
              required={true}
              name='repeatPassword'
              type='password'
            />
          </Row>
        </Col2>
        <div className='w-full text-center'>
          <Button type='submit' loading={loading} text='Validar' />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
