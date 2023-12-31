import { Page } from '../general';
import { Card } from '../../components';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Page>
      <section className='max-w-6xl m-auto flex flex-col px-4 md:px-0 mt-32 md:mt-24 mb-8 md:mb-16 md:flex-row gap-4 md:gap-8 items-start'>
        <ContactText />
        <Card title='Envie uma mensagem'>
          <ContactForm />
        </Card>
      </section>
    </Page>
  );
};

export default Contact;
