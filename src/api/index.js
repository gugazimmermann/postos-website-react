import axios from './axios';
import { masks } from '../helpers';

const getOrganization = async (organizationID) => {
  try {
    const { data } = await axios.get(`/organization/${organizationID}`);
    return data;
  } catch (error) {
    console.error(error.response.data.message);
    return error.response.data.message;
  }
};

const saveOrganization = async ({ document, name, phone, email, address, city, state }) => {
  try {
    const { data } = await axios.post(`/organization`, {
      document: masks.cnpj(document),
      name,
      phone: masks.phone(phone),
      email,
      address,
      city,
      state,
    });
    return data;
  } catch (error) {
    console.error(error.response.data.message);
    return error.response.data.message;
  }
};

const saveOrganizationLogin = async ({ id, code, login, password }) => {
  try {
    const { data } = await axios.post(`/organization/login`, {
      organizationID: id,
      code: masks.code(code),
      login,
      password,
    });
    return data;
  } catch (error) {
    console.error(error.response.data.message);
    return error.response.data.message;
  }
};

const confirmOrganization = async ({ id, code }) => {
  try {
    const { data } = await axios.post(`/organization/confirm`, {
      organizationID: id,
      code: masks.confirmationCode(code),
    });
    return data;
  } catch (error) {
    console.error(error.response.data.message);
    return error.response.data.message;
  }
};

const contact = async ({ name, email, message }) => {
  try {
    const { data } = await axios.post(`/contact`, { name, email, message });
    return data;
  } catch (error) {
    console.error(error.response.data.message);
    return error.response.data.message;
  }
};

export {
  getOrganization,
  saveOrganization,
  saveOrganizationLogin,
  confirmOrganization,
  contact
};
