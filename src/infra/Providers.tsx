import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { PropsWithChildren } from 'react';
import { theme } from './styles/nativeBase.config';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Providers;
