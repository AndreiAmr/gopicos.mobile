import {
  IntegrationErrorsEnum,
  networkErrorStore,
} from '@infra/stores/network-error';
import LottieView from 'lottie-react-native';
import { Button, HStack, Modal, Text } from 'native-base';
import noInternetAnimation from '@assets/animations/no-internet.json';

export const CriticalError = () => {
  const { error, setError } = networkErrorStore();

  return (
    <>
      <Modal isOpen={!!error} onClose={() => setError(null)}>
        <Modal.Content width='86%'>
          {/* <Modal.Header>Contact Us</Modal.Header> */}
          <Modal.Body w='100%'>
            <HStack justifyContent='space-between' alignItems='center'>
              <Text fontWeight='bold' color='danger.500' fontSize={18}>
                Opps...
              </Text>
              <LottieView
                autoPlay
                style={{
                  width: 20,
                  height: 20,
                }}
                source={noInternetAnimation}
              />
            </HStack>

            <Text
              fontFamily='regular'
              color='muted.500'
              fontSize={12}
              marginTop={3}
            >
              Por favor, verifique sua conexão com a internet e tente novamente.
            </Text>

            <Button
              marginTop={8}
              onPress={() => setError(null)}
              // background='rose.700'
              variant='outline'
              borderColor='light.400'
            >
              <Text color='light.500' fontFamily='medium'>
                Entendido!
              </Text>
            </Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
