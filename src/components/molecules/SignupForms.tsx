import { useSignUpForms } from 'src/hooks/logic/useSignupForms';
import PersonInfos from './SignupFormsInputs/PersonInfos';
import { Box, Button, KeyboardAvoidingView, Text, VStack } from 'native-base';
import Email from './SignupFormsInputs/Email';
import Password from './SignupFormsInputs/Password';
import { ChangeEvent } from 'react';

const formSteps = {
  '1': {
    Element: PersonInfos,
    fields: ['name', 'lastname', 'nickname'],
  },
  '2': {
    fields: ['email'],

    Element: Email,
  },
  '3': {
    fields: ['password', 'confirmPassword'],

    Element: Password,
  },
};

type SignUpFormsProps = {
  formSteps: typeof formSteps;
  values: {
    name: string;
    lastname: string;
    nickname: string;
    step: number;
    email: string;
    password: string;
    confirmPassword: string;
  };

  errors?: {
    name?: string;
    lastname?: string;
    nickname?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };

  handleChange(e: ChangeEvent<any>): void;
};

const SignUpForms = ({
  values,
  errors,
  formSteps,

  handleChange,
}: SignUpFormsProps) => {
  const CurrentElement = formSteps[values.step]?.Element || null;

  return (
    <>
      {CurrentElement && (
        <CurrentElement
          errors={errors}
          values={values}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default SignUpForms;
