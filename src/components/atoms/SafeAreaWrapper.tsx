import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type SafeAreaWrapperProps = PropsWithChildren & {};

const SafeAreaWrapper = ({ children }: SafeAreaWrapperProps) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;
