import { cnpj } from 'cpf-cnpj-validator';

const isValidCNPJ = (document) => cnpj.isValid(document.replace(/\D+/g, ''))

export default isValidCNPJ;
