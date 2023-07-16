import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import Page from '../Page';
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
      <section className='container m-auto flex mt-32 md:mt-24 mb-8 md:mb-16'>
        <SuccessText code={code} name={name} login={login} email={email} />
      </section>
    </Page>
  );
};

export default Success;
