import apiInstance from '@api';
export const getAllProduct = async () => {
  try {
    console.log('getAllProduct231');
    const response = await apiInstance.get('products');
    console.log('response', response);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log('error', error);
    return Promise.reject(error);
  }
};
