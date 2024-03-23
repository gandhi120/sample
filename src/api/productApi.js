import apiInstance from '@api';
export const getAllProduct = async (limit = 10, skip = 0) => {
  try {
    const response = await apiInstance.get(
      `products?limit=${limit}&skip=${skip}`,
    );
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
