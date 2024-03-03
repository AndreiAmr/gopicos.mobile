import Input from '@components/atoms/Input';
import { Motion } from '@legendapp/motion';

type PasswordProps = {
  values: {
    password: string;
    confirmPassword: string;
  };
  errors: {
    password?: string;
    confirmPassword?: string;
  };
  handleChange(field: string): (value: string) => void;
};

const Password = ({ values, errors, handleChange }: PasswordProps) => {
  return (
    <>
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
      >
        <Input
          value={values.password}
          onChangeText={handleChange('password')}
          placeholder='Senha'
          error={errors.password}
        />
      </Motion.View>
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
        style={{
          marginTop: 15,
        }}
      >
        <Input
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          placeholder='Confirmar Senha'
          error={errors.confirmPassword}
        />
      </Motion.View>
    </>
  );
};

export default Password;
