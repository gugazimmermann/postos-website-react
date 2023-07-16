import { SectionParagraph, SectionTitle, Page, Section } from '../general';

const AboutUs = () => {
  return (
    <Page>
      <Section>
        <SectionTitle title='Sobre a' word={process.env.REACT_APP_TITLE} />
        <SectionParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae
          exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure
          consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
        </SectionParagraph>
      </Section>
    </Page>
  );
};

export default AboutUs;
