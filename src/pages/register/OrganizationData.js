import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../api';
import Page from '../Page';
import { Card } from '../../components';
import OrganizationDataText from './OrganizationDataText';
import OrganizationDataForm from './OrganizationDataForm';

const OrganizationData = () => {
  const { userId } = useParams();
  const [name, setName] = useState('');

  const getRegister = useCallback(async () => {
    const data = await api.getRegisterData(userId);
    setName(data.name);
  }, [userId]);

  useEffect(() => {
    if (userId) getRegister();
  }, [getRegister, userId]);

  return (
    <Page>
      <section className='container m-auto flex flex-col mt-32 md:mt-24 mb-8 md:mb-16 md:flex-row gap-4 md:gap-8'>
        <OrganizationDataText name={name} />
        <Card title='Finalizar Cadastro'>
          <OrganizationDataForm id={userId} name={name} />
        </Card>
      </section>
    </Page>
  );
};

export default OrganizationData;