import AppLogoName from '@components/atoms/AppLogoName';
import SignInForm from '@components/molecules/SignInForm';
import { Text, VStack } from 'native-base';

const SignInOrganism = () => {
  return (
    <VStack
      flex={1}
      justifyContent='center'
      alignItems='center'
      paddingX='29px'
    >
      <AppLogoName />
      <Text color='light.400' fontFamily='regular' fontWeight='700' mt='10px'>
        Compartilhe picos para andar de skate!
      </Text>
      <SignInForm />
    </VStack>
  );
};

export default SignInOrganism;
