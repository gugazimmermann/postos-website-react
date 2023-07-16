import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import Page from '../General/Page';
import { Card } from '../../components';
import LoginText from './LoginText';
import LoginForm from './LoginForm';

const Login = () => {
  const { userId } = useParams();
  const [name, setName] = useState('');

  const getRegister = useCallback(async () => {
    const data = await api.getRegisterLogin(userId);
    setName(data.name);
  }, [userId]);

  useEffect(() => {
    if (userId) getRegister();
  }, [getRegister, userId]);

  return (
    <Page>
      <section className='max-w-6xl m-auto flex flex-col px-4 md:px-0 mt-32 md:mt-24 mb-8 md:mb-16 md:flex-row gap-4 md:gap-8'>
        <LoginText name={name} />
        <Card title='Dados de Acesso'>
          <LoginForm id={userId} name={name} />
        </Card>
      </section>
    </Page>
  );
};

export default Login;
