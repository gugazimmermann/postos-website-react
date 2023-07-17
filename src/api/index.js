/* eslint-disable no-unused-vars */
const UseTimeout = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const verifyCode = '123456';

let organization = {
  id: 'a78bbda1-eb40-452e-be6b-e542c0fb33ba',
  document: '',
  name: '',
  email: '',
  phone: '',
  addres: '',
  city: '',
  state: '',
  code: '',
  login: '',
};

const simulateAPICall = async (data) => {
  await UseTimeout(2000);
  return { data };
};

const simulateAPIError = async (data) => {
  await UseTimeout(2000);
  return { data };
};

const postRegister = async ({ document, name, email, phone, address, city, state }) => {
  let res = null;
  if (email === 'teste@teste.com') {
    res = await simulateAPIError({ message: 'Email is already in registered.' });
  } else if (document === '02.934.121/0001-36') {
    res = await simulateAPIError({ message: 'Document is already in registered.' });
  } else {
    organization = { ...organization, document, name, email, phone, address, city, state };
    res = await simulateAPICall(organization);
  }
  return res;
};

const getRegisterLogin = async (id) => {
  const { data } = await simulateAPICall(organization);
  return data;
};

const postRegisterLogin = async ({ id, code, login, password }) => {
  let res = null;
  if (code === 'teste') {
    res = await simulateAPIError({ message: 'Code is already in registered.' });
  } else {
    organization = { ...organization, code, login };
    res = await simulateAPICall(organization);
  }
  return res;
};

const getRegisterCode = async (id) => {
  const { data } = await simulateAPICall(organization);
  return data;
};

const postRegisterCode = async ({ id, code }) => {
  let res = null;
  if (code !== verifyCode) {
    res = await simulateAPIError({ message: 'Code not found.' });
  } else {
    res = await simulateAPICall(organization);
  }
  return res;
};

const getRegisterSuccess = async (id) => {
  const { data } = await simulateAPICall(organization);
  return data;
};

const postContact = async ({ name, email, message }) => {
  const res = await simulateAPICall({ message: 'Message sent successfully!'});
  return res;
};

export {
  postRegister,
  getRegisterCode,
  postRegisterCode,
  getRegisterLogin,
  postRegisterLogin,
  getRegisterSuccess,
  postContact
};
