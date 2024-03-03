import Input from '@components/atoms/Input';
import { Motion } from '@legendapp/motion';
import { VStack } from 'native-base';

type Fields = {
  name: string;
  lastname: string;
  nickname: string;
};

type PersonInfosProps = {
  values: Fields;
  handleChange(field: string): (value: string) => void;
  errors?: Partial<Fields>;
};

const PersonInfos = ({ values, errors, handleChange }: PersonInfosProps) => {
  return (
    <VStack>
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
          delay: 400,
        }}
        exit={{
          scale: 0,
          x: -100,
        }}
      >
        <Input
          value={values.name}
          onChangeText={handleChange('name')}
          placeholder='Nome'
          error={errors?.name}
        />
      </Motion.View>
      <VStack h={'17px'} />

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
          delay: 500,
        }}
        exit={{
          scale: 0,
          x: -100,
        }}
      >
        <Input
          value={values.lastname}
          onChangeText={handleChange('lastname')}
          placeholder='Sobrenome'
          error={errors?.lastname}
        />
      </Motion.View>
      <VStack h={'17px'} />

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
          delay: 600,
        }}
      >
        <Input
          value={values.nickname}
          onChangeText={handleChange('nickname')}
          placeholder='Apelido no app'
          error={errors?.nickname}
        />
      </Motion.View>
    </VStack>
  );
};

export default PersonInfos;
