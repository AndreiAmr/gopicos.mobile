import Input from '@components/atoms/Input';
import { Box, Button, HStack, Text } from 'native-base';
import { useSignInForms } from 'src/hooks/logic/useSignInForms';

const SignInForm = () => {
  const {
    items: { values, errors },
    handlers: { handleChange, handleSubmit },
  } = useSignInForms();

  return (
    <Box width='100%' gap='17px' marginTop='72px'>
      <Input
        value={values.email}
        placeholder='Email'
        error={errors.email}
        onChangeText={handleChange('email')}
      />
      <Input
        value={values.password}
        placeholder='Senha'
        error={errors.password}
        onChangeText={handleChange('password')}
      />

      <Button
        onPress={() => handleSubmit()}
        background='cyan.500'
        borderRadius='8px'
        _focus={{
          opacity: 0.2,
        }}
        _pressed={{
          opacity: 0.9,
        }}
      >
        <Text color='light.100' fontFamily='medium' fontSize={18}>
          {' '}
          Entrar
        </Text>
      </Button>
      <HStack justifyContent='center'>
        <Text marginRight='2px' fontFamily='regular'>
          Não tem conta ?
        </Text>
        <Text fontFamily='medium' color='yellow.600'>
          Cadastre-se!
        </Text>
      </HStack>
    </Box>
  );
};

export default SignInForm;
