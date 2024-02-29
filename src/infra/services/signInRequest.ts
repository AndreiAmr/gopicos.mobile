import http from '@infra/http';
import { urls } from '@infra/utils/services-urls';
import { IUser } from 'src/types/user';

type SignInDTO = {
  email: string;
  password: string;
};

export const signInRequest = async ({
  email,
  password,
}: SignInDTO): Promise<IUser> => {
  const { data } = await http.post(urls.authentication.signin, {
    email,
    password,
  });

  return data as IUser;
};
