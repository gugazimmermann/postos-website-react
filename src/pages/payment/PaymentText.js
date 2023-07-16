const PaymentText = () => {
  return (
    <div className='flex flex-col justify-center leading-6'>
      <h1 className='text-lg font-bold text-slate-800 mb-4'>Pague por Utilização</h1>
      <p className='text-slate-800 mb-2'>
        A cobrança será realizada com base nos clientes ativos, ou seja, os clientes que abasteceram naquele mês (não importando a quantidade de abastecimentos realizados).
      </p>
      <p className='text-slate-800 mb-2'>
        Por exemplo, se 12 clientes abasteceram no mês, o valor será de R$ 60,00, se 120 clientes abasteceram, o valor será de R$ 570,00 (R$ 500,00 pelos 100 clientes, e R$ 70,00 pelos 20 acima de 100).
      </p>
    </div>
  );
};

export default PaymentText;
