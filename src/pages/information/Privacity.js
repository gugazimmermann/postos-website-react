import { SectionParagraph, SectionTitle, SectionSubTitle, Page, Section } from '../general';

const Privacity = () => {
  return (
    <Page>
      <Section>
        <SectionTitle title='Políticas de Privacidade' />
        <SectionSubTitle>Última Atualização: 16/07/2023</SectionSubTitle>
        <SectionParagraph>
          Bem-vindo ao {process.env.REACT_APP_TITLE}, um Software como Serviço (SaaS) para Gestão de Frota
          em Postos de Combustível. Nossa política de privacidade descreve como coletamos, usamos e
          protegemos suas informações pessoais ao utilizar nosso sistema SaaS. Ao acessar ou
          utilizar o {process.env.REACT_APP_TITLE}, você concorda com a coleta e uso de suas informações
          de acordo com esta política de privacidade. Se você não concorda com esta política, por
          favor, não utilize nossos serviços.
        </SectionParagraph>

        <SectionSubTitle>1. Informações Coletadas</SectionSubTitle>
        <SectionParagraph>
          1.1 Informações de Cadastro: Ao criar uma conta no {process.env.REACT_APP_TITLE}, coletamos
          informações pessoais como nome, endereço de e-mail, e informações de contato. Esses dados
          são necessários para o registro e para garantir que podemos fornecer os serviços
          contratados.
        </SectionParagraph>
        <SectionParagraph>
          1.2 Informações de Uso: Coletamos informações sobre o uso do sistema SaaS, incluindo logs
          de atividades, registros de acesso, endereço IP e dados de navegação. Essas informações
          nos ajudam a melhorar o desempenho da plataforma e aprimorar a experiência do usuário.
        </SectionParagraph>
        <SectionParagraph>
          1.3 Informações de Transações: Seus dados de transações e informações relacionadas às
          atividades da frota são coletados para fornecer os serviços de gestão de frota no Touch
          Sistemas - Postos.
        </SectionParagraph>

        <SectionSubTitle>2. Uso das Informações</SectionSubTitle>
        <SectionParagraph>
          2.1 Fornecimento dos Serviços: Utilizamos suas informações pessoais para fornecer os
          serviços contratados no {process.env.REACT_APP_TITLE}, incluindo o gerenciamento das transações
          da frota e a melhoria contínua da plataforma.
        </SectionParagraph>
        <SectionParagraph>
          2.2 Comunicações: Podemos utilizar suas informações de contato para enviar notificações
          sobre atualizações, alterações nos serviços ou informações importantes relacionadas ao
          sistema SaaS.
        </SectionParagraph>
        <SectionParagraph>
          2.3 Análises e Melhorias: Utilizamos informações agregadas e anônimas para análises,
          pesquisas de mercado e aprimoramento das funcionalidades do {process.env.REACT_APP_TITLE}.
        </SectionParagraph>

        <SectionSubTitle>3. Compartilhamento de Informações</SectionSubTitle>
        <SectionParagraph>
          3.1 Com Terceiros: Não compartilhamos suas informações pessoais com terceiros, exceto
          quando necessário para a prestação dos serviços contratados ou quando exigido por lei.
        </SectionParagraph>
        <SectionParagraph>
          3.2 Provedores de Serviços: Podemos utilizar provedores de serviços terceirizados para
          ajudar na operação do sistema SaaS. Esses provedores têm acesso limitado às suas
          informações pessoais e estão obrigados a proteger sua privacidade.
        </SectionParagraph>
        <SectionParagraph>
          3.3 Consentimento: Em algumas situações, podemos solicitar seu consentimento antes de
          compartilhar suas informações pessoais com terceiros. Nesse caso, você terá a opção de
          consentir ou recusar o compartilhamento.
        </SectionParagraph>

        <SectionSubTitle>4. Segurança das Informações</SectionSubTitle>
        <SectionParagraph>
          4.1 Medidas de Segurança: Implementamos medidas técnicas e organizacionais para proteger
          suas informações pessoais contra acesso não autorizado, uso indevido, perda ou divulgação.
        </SectionParagraph>
        <SectionParagraph>
          4.2 Acesso Restrito: O acesso às informações pessoais é restrito a funcionários
          autorizados e pessoas que precisam conhecer essas informações para fornecer os serviços
          contratados.
        </SectionParagraph>
        <SectionParagraph>
          4.3 Retenção de Dados: Manteremos suas informações pessoais pelo tempo necessário para
          fornecer os serviços solicitados ou conforme exigido por lei.
        </SectionParagraph>

        <SectionSubTitle>5. Seus Direitos</SectionSubTitle>
        <SectionParagraph>
          5.1 Acesso e Correção: Você tem o direito de acessar e corrigir suas informações pessoais
          mantidas pelo {process.env.REACT_APP_TITLE}. Caso necessite atualizar seus dados, entre em
          contato conosco através das informações fornecidas abaixo.
        </SectionParagraph>
        <SectionParagraph>
          5.2 Cancelamento da Assinatura: Você pode cancelar sua assinatura e solicitar a exclusão
          de suas informações pessoais do sistema SaaS. Contudo, tenha em mente que a exclusão de
          algumas informações pode afetar a prestação dos serviços.
        </SectionParagraph>

        <SectionSubTitle>6. Alterações na Política de Privacidade</SectionSubTitle>
        <SectionParagraph>
          6.1 Atualizações: Podemos atualizar esta política de privacidade de tempos em tempos.
          Quaisquer alterações significativas serão notificadas aos usuários por meio de uma
          notificação clara no site ou por e-mail.
        </SectionParagraph>

        <SectionParagraph>
        Ao utilizar o {process.env.REACT_APP_TITLE}, você reconhece que leu, compreendeu e concordou com
          estas Políticas de Privacidade. Se tiver alguma dúvida ou preocupação, entre em contato conosco
          através das informações de contato fornecidas.
        </SectionParagraph>
      </Section>
    </Page>
  );
};

export default Privacity;
