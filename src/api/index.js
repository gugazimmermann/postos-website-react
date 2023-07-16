/* eslint-disable no-unused-vars */
const UseTimeout = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

const dataId = 'a78bbda1-eb40-452e-be6b-e542c0fb33ba';
const dataEmail = 'gugazimmermann@gmail.com';
const dataName = 'Fernandinho';
const dataCode = 'fernandinho';

const simulateAPICall = async (data) => {
  try {
    await UseTimeout(2000);
    const responseData = { data };
    return responseData;
  } catch (error) {
    throw new Error('API call failed!');
  }
};

const postRegister = async ({ document, name, email, phone, address, city, state }) => {
  const { data } = await simulateAPICall({ id: dataId });
  return data;
};

const getRegisterCode = async (id) => {
  const { data } = await simulateAPICall({ id: dataId, email: dataEmail });
  return data;
};

const postRegisterCode = async ({ id, code }) => {
  const { data } = await simulateAPICall({ id: dataId });
  return data;
};

const getRegisterData = async (id) => {
  const { data } = await simulateAPICall({ id: dataId, name: dataName });
  return data;
};

const postRegisterData = async ({ code, password }) => {
  const { data } = await simulateAPICall({ id: dataId, code: dataCode });
  return data;
};

const getRegisterSuccess = async (id) => {
  const { data } = await simulateAPICall({ id: dataId, code: dataCode, name: dataName, email: dataEmail });
  return data;
};

export { postRegister, getRegisterCode, postRegisterCode, getRegisterData, postRegisterData, getRegisterSuccess };
