import Page from '../Page';
import { Card } from '../../components';
import RegisterText from './RegisterText';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <Page>
      <section className='max-w-6xl m-auto flex flex-col px-4 md:px-0 mt-32 md:mt-24 mb-8 md:mb-16 md:flex-row gap-4 md:gap-8'>
        <RegisterText />
        <Card title='Dados da Organização'>
          <RegisterForm />
        </Card>
      </section>
    </Page>
  );
};

export default Register;
