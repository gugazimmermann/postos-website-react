import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import { Page } from '../general';
import { Card } from '../../components';
import CodeText from './CodeText';
import CodeForm from './CodeForm';

const Code = () => {
  const { userId, confirmationCode } = useParams();
  const [email, setEmail] = useState('');

  const getRegister = useCallback(async () => {
    const data = await api.getOrganization(userId);
    console.log(data)
    setEmail(data.email);
  }, [userId]);

  useEffect(() => {
    if (userId) getRegister();
  }, [getRegister, userId]);

  return (
    <Page>
      <section className='max-w-6xl m-auto flex flex-col px-4 md:px-0 mt-32 md:mt-24 mb-8 md:mb-16 md:flex-row gap-4 md:gap-8'>
        <CodeText email={email} />
        <Card title='Digite seu Código de Confirmação'>
          <CodeForm id={userId} email={email} confirmationCode={confirmationCode} />
        </Card>
      </section>
    </Page>
  );
};

export default Code;
