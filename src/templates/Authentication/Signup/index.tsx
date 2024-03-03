import SignUpOrganism from '@components/organisms/SignUpOrganism';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { Button, HStack, ScrollView, Text, VStack } from 'native-base';
import { Alert, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSignUpForms } from 'src/hooks/logic/useSignupForms';

const deviceHeight = Dimensions.get('window').height;

const isIOS = Platform.OS === 'ios';

const SignupTemplate = () => {
  return (
    <VStack
      flex={1}
      background='background'
      alignItems='flex-start'
      paddingX={29}
    >
      <ScrollView
        flex={1}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '20%',
          minHeight: deviceHeight - 200,
        }}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <SignUpOrganism />
        </SafeAreaView>
      </ScrollView>
    </VStack>
  );
};

export default SignupTemplate;
