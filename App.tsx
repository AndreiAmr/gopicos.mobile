import Providers from '@infra/Providers';
import MainRoutes from '@routes/Main.routes';
import InterRegular from '@assets/fonts/Inter-Regular.ttf';
import InterMedium from '@assets/fonts/Inter-Medium.ttf';
import InterBold from '@assets/fonts/Inter-Bold.ttf';

import { useFonts } from 'expo-font';
import { CriticalError } from '@components/atoms/CriticalError';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: InterRegular,
    Medium: InterMedium,
    Bold: InterBold,
  });

  if (!fontsLoaded) return null;

  return (
    <Providers>
      <CriticalError />
      <MainRoutes />
    </Providers>
  );
}
