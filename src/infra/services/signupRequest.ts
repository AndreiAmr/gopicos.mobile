import http from '@infra/http';
import { urls } from '@infra/utils/services-urls';

type SignupRequestDTO = {
  name: string;
  lastname: string;
  nickname: string;
  email: string;
  password: string;
};

export const signupRequest = async (userData: SignupRequestDTO) => {
  const { data } = await http.post(urls.authentication.signup, userData);

  return data;
};
