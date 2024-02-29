import SafeAreaWrapper from '@components/atoms/SafeAreaWrapper';
import SignInOrganism from '@components/organisms/SignInOrganism';
import { KeyboardAvoidingView, VStack } from 'native-base';

const SignInTemplate = () => {
  return (
    <VStack flex={1} background='background'>
      <SafeAreaWrapper>
        <KeyboardAvoidingView behavior='padding' flex={1}>
          <SignInOrganism />
        </KeyboardAvoidingView>
      </SafeAreaWrapper>
    </VStack>
  );
};

export default SignInTemplate;
