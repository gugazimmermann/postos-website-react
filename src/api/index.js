/* eslint-disable no-unused-vars */
const UseTimeout = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

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
  const { data } = await simulateAPICall({ id: 'a78bbda1-eb40-452e-be6b-e542c0fb33ba' });
  return data;
};

const getRegister = async (id) => {
  const { data } = await simulateAPICall({ email: 'gugazimmermann@gmail.com' });
  return data;
};

const postRegisterCode = async ({ id, code }) => {
  const { data } = await simulateAPICall({ id: 'a78bbda1-eb40-452e-be6b-e542c0fb33ba' });
  return data;
};

export { postRegister, getRegister, postRegisterCode };
