import apiInstance from '@api';
export const loginUser = async params => {
  try {
    const response = await apiInstance.post('auth/login', params);
    console.log('response', response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('error', error);
    return Promise.reject(error);
  }
};
