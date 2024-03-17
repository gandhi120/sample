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

// export async function loginUser(params) {
//   console.log('apiInstance', apiInstance);
//   try {
//     const response = await apiInstance({
//       method: 'POST',
//       url: 'auth/login',
//       body: JSON.stringify(params),
//     });
//     console.log('response', response);
//     return Promise.resolve(response);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// }
