import Input from '@components/atoms/Input';
import { Motion } from '@legendapp/motion';

type EmailProps = {
  values: {
    email: string;
  };
  errors?: {
    email?: string;
  };
  handleChange(field: string): (value: string) => void;
};

const Email = ({ values, errors, handleChange }: EmailProps) => {
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
          delay: 200,
        }}
      >
        <Input
          value={values.email}
          onChangeText={handleChange('email')}
          placeholder='Email'
          error={errors.email}
        />
      </Motion.View>
    </>
  );
};

export default Email;
