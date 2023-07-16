const PaymentTable = () => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-slate-500'>
        <tbody>
          <tr className='bg-white border-b'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap'
            >
              De 1 até 10 clientes
            </th>
            <td className='px-6 py-4'>R$ 50,00 Fixo</td>
          </tr>
          <tr className='border-b bg-slate-50'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap'
            >
              De 11 até 100 clientes
            </th>
            <td className='px-6 py-4'>R$ 5,00 por cliente</td>
          </tr>
          <tr className='bg-white border-b'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-slate-900 whitespace-nowrap'
            >
              Acima de 100 clientes
            </th>
            <td className='px-6 py-4'>R$ 3,50 por cliente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
