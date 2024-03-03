import { signupRequest } from '@infra/services/signupRequest';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import { HStack, Text, useToast } from 'native-base';
import { useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  lastname: yup.string().required('Sobrenome é obrigatório'),
  nickname: yup.string().optional(),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
    .required('Confirmação de senha é obrigatória'),
});

export const useSignUpForms = () => {
  const [step, setStepValue] = useState<number>(1);
  const toast = useToast();
  const navigation = useNavigation();
  const maxSteps = 3;
  const minStep = 1;

  const { values, errors, handleChange, handleSubmit, setFieldError } =
    useFormik({
      initialValues: {
        name: '',
        lastname: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
        step: 1,
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          return await signupRequest(values);
        } catch (err) {
          console.log({ err });
        } finally {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Authentication' }],
            })
          );

          toast.show({
            description: 'Usuário cadastrado com sucesso',
            position: 'top',
            placement: 'top',
            duration: 7000,
            render: () => {
              return (
                <HStack background='info.100' padding={4} borderRadius={8}>
                  <Text fontFamily='medium' color='#0369a1'>
                    Usuário cadastrado com sucesso!
                  </Text>
                </HStack>
              );
            },
          });
        }
      },
    });

  const resetErrors = () => {
    setFieldError('name', '');
    setFieldError('lastname', '');
    setFieldError('nickname', '');
    setFieldError('email', '');
    setFieldError('password', '');
    setFieldError('confirmPassword', '');
  };

  const handleGoToNextStep = () => {
    if (step === maxSteps) return;

    setStepValue(step + 1);
    resetErrors();
  };

  const handleGoToPreviousStep = () => {
    if (step === minStep) return;

    setStepValue(step - 1);
  };

  console.log({ errors });

  return {
    items: {
      values: {
        ...values,
        step,
      },
      errors,
    },
    handlers: {
      handleSubmit,

      handleChange,
      handleGoToNextStep,
      handleGoToPreviousStep,
    },
  };
};
