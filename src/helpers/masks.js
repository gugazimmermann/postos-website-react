const code = (value) => value.replace(/[^a-zA-Z0-9_]/g, '')?.toLocaleLowerCase();

const cnpj = (value) => {
  return value
    .replace(/\D+/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

const phone = (value) => {
  if (!value) return '';
  let r = value.replace(/\D/g, '').replace(/^0/, '');
  if (r.length > 10) r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  else if (r.length > 5) r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  else if (r.length > 2) r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  else r = r.replace(/^(\d*)/, '($1');
  return r;
};

const confirmationCode = (value) => {
  return value?.replace(/\D+/g, '')?.slice(0, 6);
};

export { code, cnpj, phone, confirmationCode };