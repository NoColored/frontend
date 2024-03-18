export const requestLogIn = async (userId: any, userPassword: any) => {
  try {
    const response = await axios.post('/user/login', {
      id: userId,
      password: userPassword,
    });

    const token = response.data.accessToken;
    return !!token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
