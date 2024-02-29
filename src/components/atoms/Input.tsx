import {
  Input as NativeInput,
  InputGroup,
  KeyboardAvoidingView,
  FormControl,
  WarningOutlineIcon,
} from 'native-base';
import { useState } from 'react';

type InputProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  error?: string;
};

const Input = ({ value, placeholder, error, onChangeText }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FormControl isInvalid={!!error}>
      <InputGroup
        variant='unstyled'
        borderWidth={1}
        borderColor={error ? 'red.500' : isFocused ? 'yellow.500' : 'light.400'}
        borderRadius={8}
        height='47px'
      >
        <NativeInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          width='100%'
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          focusable={false}
          fontFamily='regular'
          fontSize={14}
        />
      </InputGroup>
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs' />}>
        {error}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Input;
