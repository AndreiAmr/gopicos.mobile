import { HStack, Text } from 'native-base';
import Logo from 'src/assets/svg/Logo';

const AppLogoName = () => {
  return (
    <HStack alignItems='flex-end'>
      <Text fontFamily='Bold' fontSize={28} marginRight={18}>
        GO PICOS
      </Text>
      <Logo />
    </HStack>
  );
};

export default AppLogoName;
