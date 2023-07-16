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

const getRegister = async (id) => {
  const { data } = await simulateAPICall({ email: 'gugazimmermann@gmail.com' });
  return data;
};

export { getRegister };
