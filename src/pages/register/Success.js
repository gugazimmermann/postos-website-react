import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import Page from '../General/Page';
import SuccessText from './SuccessText';

const Success = () => {
  const { userId } = useParams();
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');

  const getRegister = useCallback(async () => {
    const data = await api.getRegisterSuccess(userId);
    setCode(data.code);
    setName(data.name);
    setLogin(data.login);
    setEmail(data.email);
  }, [userId]);

  useEffect(() => {
    if (userId) getRegister(userId);
  }, [getRegister, userId]);

  return (
    <Page>
      <section className='max-w-6xl m-auto flex flex-col px-4 md:px-0 mt-32 md:mt-24 mb-8 md:mb-16 md:flex-row gap-4 md:gap-8'>
        <SuccessText code={code} name={name} login={login} email={email} />
      </section>
    </Page>
  );
};

export default Success;
