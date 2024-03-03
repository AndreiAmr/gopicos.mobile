import AppLogoName from '@components/atoms/AppLogoName';
import SignUpForms from '@components/molecules/SignupForms';
import Email from '@components/molecules/SignupFormsInputs/Email';
import Password from '@components/molecules/SignupFormsInputs/Password';
import PersonInfos from '@components/molecules/SignupFormsInputs/PersonInfos';
import { Motion } from '@legendapp/motion';
import { Box, Button, HStack, KeyboardAvoidingView, Text } from 'native-base';
import { Platform } from 'react-native';
import { useSignUpForms } from 'src/hooks/logic/useSignupForms';

import { useNavigation } from '@react-navigation/native';

const isIOS = Platform.OS === 'ios';

const formSteps = {
  '1': {
    Element: PersonInfos,
    fields: ['name', 'lastname'],
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

const SignUpOrganism = () => {
  const { items, handlers } = useSignUpForms();
  const navigation = useNavigation();

  const currentFields = (formSteps[items.values.step]?.fields ||
    []) as string[];

  const isNextButtonDisabled =
    !!currentFields.find((item) => items.errors[item]) ||
    !!currentFields.find((item) => {
      return items.values[item] === '';
    });

  const isErrorsEmpty = Object.keys(items.errors).length === 0;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={isIOS ? 'padding' : 'position'}
        position='relative'
        flex={0.9}
        justifyContent='center'
        alignItems='center'
      >
        <AppLogoName />
        <Text
          color='light.400'
          fontFamily='regular'
          mt='10px'
          textAlign='center'
          marginBottom='90px'
        >
          Preencha os dados para completar o cadastro!
        </Text>

        <SignUpForms
          values={items.values}
          errors={items.errors}
          handleChange={handlers.handleChange}
          formSteps={formSteps}
        />
      </KeyboardAvoidingView>

      <HStack width='100%' justifyContent='space-between'>
        <Motion.View
          initial={{
            scale: 0,
            x: -100,
          }}
          animate={
            items.values.step !== 1
              ? {
                  scale: 1,
                  x: 0,
                }
              : {
                  scale: 0,
                  x: -100,
                }
          }
          transition={{
            type: 'timing',
            duration: 300,
          }}
        >
          <Button
            onPress={handlers.handleGoToPreviousStep}
            background='light.100'
            height='45px'
            position={'relative'}
            paddingRight={5}
            paddingLeft={5}
            borderRadius={30}
          >
            <Text fontFamily='medium' color='muted.500'>
              Anterior
            </Text>
          </Button>
        </Motion.View>

        <Motion.View
          initial={{
            scale: 0,
            x: -100,
          }}
          animate={{
            scale: 1,
            x: 0,
          }}
          transition={{
            type: 'timing',
            duration: 300,
            delay: 900,
          }}
        >
          <Button
            onPress={
              items.values.step == 3
                ? () => handlers.handleSubmit()
                : handlers.handleGoToNextStep
            }
            background='info.600'
            height='45px'
            position={'relative'}
            paddingRight={5}
            paddingLeft={5}
            borderRadius={30}
            isDisabled={isNextButtonDisabled}
          >
            <HStack>
              <Text fontFamily='medium' color='light.100'>
                {items.values.step === 3
                  ? 'Finalizar'
                  : `Prosseguir (${items.values.step}/3) `}
              </Text>
            </HStack>
          </Button>
        </Motion.View>
      </HStack>
    </>
  );
};

export default SignUpOrganism;
