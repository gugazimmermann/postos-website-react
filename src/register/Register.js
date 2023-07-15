import Page from '../Page';
import { Card } from '../components';
import RegisterText from './RegisterText';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <Page>
      <section className='container m-auto flex gap-16'>
        <RegisterText />
        <Card title='Dados da Organização'>
          <RegisterForm />
        </Card>
      </section>
    </Page>
  );
};

export default Register;
