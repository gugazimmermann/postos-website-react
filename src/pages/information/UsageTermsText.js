import { SectionParagraph, SectionSubTitle } from '../general';

const UsageTermsText = () => {
  return (
    <>
      <SectionSubTitle>Última Atualização: 16/07/2023</SectionSubTitle>
      <SectionParagraph>
        Bem-vindo ao {process.env.REACT_APP_TITLE}, um Software como Serviço (SaaS) para Gestão de
        Frota em Postos de Combustível. Estes Termos de Uso descrevem os termos e condições que
        regem o uso da plataforma {process.env.REACT_APP_TITLE}. Ao acessar ou utilizar nosso
        sistema SaaS, você concorda em cumprir estes Termos de Uso. Caso você não concorde com estes
        termos, por favor, não utilize nossos serviços.
      </SectionParagraph>
      <SectionSubTitle>1. Definições</SectionSubTitle>
      <ul className='text-slate-500'>
        <li className='mt-1'>
          <strong>{process.env.REACT_APP_TITLE}:</strong> Refere-se ao sistema SaaS para Gestão de
          Frota em Postos de Combustível fornecido pela empresa.
        </li>
        <li className='mt-1'>
          <strong>Usuário:</strong> Refere-se a qualquer indivíduo ou entidade que acessa ou utiliza
          o sistema {process.env.REACT_APP_TITLE}.
        </li>
        <li className='mt-1'>
          <strong>Cliente:</strong> Refere-se ao proprietário do Posto de Combustível ou entidade
          que assina nossos serviços para gerenciar as transações de sua frota.
        </li>
        <li className='mt-1'>
          <strong>Conta:</strong> Significa a conta de usuário criada por um cliente para acessar e
          utilizar o sistema SaaS.
        </li>
        <li className='mt-1'>
          <strong>Dados:</strong> Significa qualquer informação, incluindo informações pessoais ou
          sensíveis, fornecida pelos clientes ou coletada através do uso do sistema SaaS.
        </li>
      </ul>
      <SectionSubTitle>2. Acesso e Uso</SectionSubTitle>
      <SectionParagraph>
        2.1 Criação de Conta: Para utilizar o {process.env.REACT_APP_TITLE}, os clientes devem criar
        uma conta. Os clientes são responsáveis por fornecer informações precisas e atualizadas
        durante o processo de registro.
      </SectionParagraph>
      <SectionParagraph>
        2.2 Autorização de Uso: Os clientes são responsáveis por manter a confidencialidade das
        credenciais de sua conta e garantir que o acesso seja restrito a pessoal autorizado somente.
      </SectionParagraph>
      <SectionParagraph>
        2.3 Uso Legal: Os usuários concordam em utilizar o {process.env.REACT_APP_TITLE} em
        conformidade com todas as leis e regulamentos aplicáveis. É estritamente proibido usar o
        sistema SaaS para atividades ilegais, não autorizadas ou maliciosas.
      </SectionParagraph>
      <SectionParagraph>
        2.4 Serviços de Terceiros: O {process.env.REACT_APP_TITLE} pode integrar-se a serviços ou
        softwares de terceiros. O uso dessas integrações está sujeito aos termos e condições dos
        respectivos provedores de terceiros.
      </SectionParagraph>
      <SectionSubTitle>3. Dados e Privacidade</SectionSubTitle>
      <SectionParagraph>
        3.1 Propriedade dos Dados: Os clientes mantêm todos os direitos, propriedade e controle
        sobre os dados fornecidos ao {process.env.REACT_APP_TITLE}. Nós não reivindicamos a
        propriedade de quaisquer dados do cliente.
      </SectionParagraph>
      <SectionParagraph>
        3.2 Proteção de Dados: O {process.env.REACT_APP_TITLE} adota medidas adequadas para proteger
        os dados dos clientes contra acesso não autorizado, perda ou divulgação. No entanto, os
        clientes reconhecem que nenhuma transmissão ou armazenamento de dados é totalmente seguro e
        utilizam o sistema SaaS por sua própria conta e risco.
      </SectionParagraph>
      <SectionParagraph>
        3.3 Uso de Dados: O {process.env.REACT_APP_TITLE} pode analisar e agregar dados para
        melhorar a funcionalidade da plataforma, aprimorar a experiência do usuário e gerar
        informações. No entanto, não divulgaremos dados individuais de clientes sem consentimento
        explícito.
      </SectionParagraph>
      <SectionParagraph>
        3.4 Conformidade: O {process.env.REACT_APP_TITLE} cumpre as leis aplicáveis de proteção de
        dados e privacidade. Os clientes são responsáveis por cumprir suas próprias obrigações de
        proteção de dados relacionadas ao uso do sistema SaaS.
      </SectionParagraph>
      <SectionSubTitle>4. Pagamento e Assinatura</SectionSubTitle>
      <SectionParagraph>
        4.1 Preços: Os clientes devem pagar a taxa de assinatura acordada pelo uso do Touch Sistemas
        - Postos. Os detalhes de preços, termos de pagamento e ciclo de faturamento serão
        especificados no contrato de assinatura.
      </SectionParagraph>
      <SectionParagraph>
        4.2 Período de Assinatura: O período de assinatura será definido no contrato de assinatura.
        O contrato pode ser renovado ou encerrado conforme seus termos.
      </SectionParagraph>
      <SectionParagraph>
        4.3 Cancelamento: Os clientes podem cancelar sua assinatura a qualquer momento, mas não
        serão fornecidos reembolsos por períodos de assinatura parciais.
      </SectionParagraph>
      <SectionParagraph>
        4.4 Alterações nos Preços: O {process.env.REACT_APP_TITLE} reserva-se o direito de alterar
        as taxas de assinatura ou introduzir novas cobranças mediante aviso prévio razoável aos
        clientes.
      </SectionParagraph>
      <SectionSubTitle>5. Propriedade Intelectual</SectionSubTitle>
      <SectionParagraph>
        5.1 Propriedade: O {process.env.REACT_APP_TITLE} retém todos os direitos, título e interesse
        no sistema SaaS, incluindo todos os direitos de propriedade intelectual associados.
      </SectionParagraph>
      <SectionParagraph>
        5.2 Licença Limitada: O {process.env.REACT_APP_TITLE} concede aos clientes uma licença não
        exclusiva, não transferível e revogável para usar o sistema SaaS durante o período de
        assinatura.
      </SectionParagraph>
      <SectionParagraph>
        5.3 Licença de Dados do Cliente: Os clientes concedem ao {process.env.REACT_APP_TITLE} o
        direito de usar seus dados exclusivamente para o propósito de fornecer e aprimorar o sistema
        SaaS.
      </SectionParagraph>
      <SectionSubTitle>6. Limitação de Responsabilidade</SectionSubTitle>
      <SectionParagraph>
        6.1 Sem Garantia: O {process.env.REACT_APP_TITLE} fornece o sistema SaaS &quot;como
        está&quot;, sem quaisquer garantias ou garantias de qualquer tipo, sejam expressas ou
        implícitas. Nós não garantimos que o sistema SaaS estará livre de erros, ininterrupto ou
        atenderá a requisitos específicos.
      </SectionParagraph>
      <SectionParagraph>
        6.2 Danos Indiretos: O {process.env.REACT_APP_TITLE} não será responsável por quaisquer
        danos indiretos, consequenciais ou incidentais decorrentes do uso do sistema SaaS.
      </SectionParagraph>
      <SectionParagraph>
        6.3 Limitação: Em nenhuma circunstância a responsabilidade do {process.env.REACT_APP_TITLE}
        excederá o valor total pago pelo cliente pelo sistema SaaS durante os doze meses anteriores
        à reclamação.
      </SectionParagraph>
      <SectionSubTitle>7. Rescisão</SectionSubTitle>
      <SectionParagraph>
        7.1 Rescisão pelo Cliente: Os clientes podem rescindir sua assinatura a qualquer momento.
        Após a rescisão, os dados do cliente serão retidos por um período limitado, conforme
        especificado em nossa política de retenção de dados.
      </SectionParagraph>
      <SectionParagraph>
        7.2 Rescisão pelo {process.env.REACT_APP_TITLE}: O {process.env.REACT_APP_TITLE} pode
        suspender ou rescindir a conta de um cliente em caso de violação destes Termos de Uso ou
        falta de pagamento das taxas de assinatura.
      </SectionParagraph>
      <SectionSubTitle>8. Alterações</SectionSubTitle>
      <SectionParagraph>
        8.1 Alterações nos Termos de Uso: O {process.env.REACT_APP_TITLE} reserva-se o direito de
        atualizar estes Termos de Uso a qualquer momento. Os clientes serão notificados de
        alterações significativas, e o uso contínuo do sistema SaaS constituirá a aceitação dos
        termos revisados.
      </SectionParagraph>
      <SectionSubTitle>9. Lei Aplicável e Resolução de Disputas</SectionSubTitle>
      <SectionParagraph>
        9.1 Lei Aplicável: Estes Termos de Uso serão regidos e interpretados de acordo com as leis
        do Brasil.
      </SectionParagraph>
      <SectionParagraph>
        9.2 Resolução de Disputas: Quaisquer disputas decorrentes ou relacionadas a estes Termos de
        Uso serão resolvidas amigavelmente através de negociações de boa fé. Se não for possível
        chegar a uma solução, as partes concordam em submeter-se à jurisdição exclusiva dos
        tribunais brasileiros.
      </SectionParagraph>
      <SectionParagraph>
        Ao utilizar o {process.env.REACT_APP_TITLE}, você reconhece que leu, compreendeu e concordou
        com estes Termos de Uso. Se tiver alguma dúvida ou preocupação, entre em contato conosco
        através das informações de contato fornecidas.
      </SectionParagraph>
    </>
  );
};

export default UsageTermsText;
