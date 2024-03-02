import { signInRequest } from '@infra/services/signInRequest';
import { userStore } from '@infra/stores/user.store';
import { SignInErrors } from 'src/types/errors/signInErrors';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigation, CommonActions } from '@react-navigation/native';

const signInSchema = yup.object().shape({
  email: yup.string().email('Email Inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

export const useSignInForms = () => {
  const navigation = useNavigation();
  const { setUser } = userStore();
  const { values, errors, setFieldValue, handleSubmit, setFieldError } =
    useFormik({
      initialValues: {
        email: 'andrei@gmail.com',
        password: 'amaral',
      },
      validationSchema: signInSchema,
      onSubmit: async (userCredentials) => {
        try {
          const response = await signInRequest(userCredentials);

          setUser(response);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'App' }],
            })
          );
        } catch (err) {
          const errorMessage = err.response.data.data.message;

          if (errorMessage === SignInErrors.USER_NOT_FOUND) {
            setFieldError('email', 'Usuário não encontrado');
          }

          if (errorMessage === SignInErrors.INVALID_PASSWORD) {
            setFieldError('password', 'Senha inválida');
          }
        }
      },
      validateOnChange: false,
    });

  const handleChange = (field: string) => (text: string) =>
    setFieldValue(field, text);

  return {
    items: {
      values,
      errors,
    },
    handlers: {
      handleChange,
      handleSubmit,
    },
  };
};
