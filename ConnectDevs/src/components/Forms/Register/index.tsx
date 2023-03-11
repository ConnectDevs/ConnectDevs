import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormSchema } from './RegisterFormSchema';
import { Input } from '../Input';
import { iRegisterFormData } from '../../../providers/UserContext/@types';
import { UserContext } from '../../../providers/UserContext/UserContext';
import Spinner from '../../Spinner/Spinner';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({ resolver: yupResolver(registerFormSchema) });

  const { userRegister, isLoading } = useContext(UserContext);

  const submitEvent = (formData: iRegisterFormData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitEvent)}>
      <Input
        label='Name'
        placeholder='Name'
        type='text'
        hiddenButton={false}
        register={register('name')}
        error={errors.name}
      />
      <Input
        label='Email'
        placeholder='Email'
        type='email'
        hiddenButton={false}
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Username'
        placeholder='Username'
        type='text'
        hiddenButton={false}
        register={register('username')}
        error={errors.email}
      />
      <Input
        label='Password'
        placeholder='Password'
        type='password'
        hiddenButton
        register={register('password')}
        error={errors.password}
      />
      <Input
        label='Confirm Password'
        placeholder='Confirm Password'
        type='password'
        hiddenButton
        register={register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <StyledButton
        $buttonSize='default'
        $buttonStyle='blue'
        type='submit'
        disabled={isLoading}
        title='Criar conta'
        aria-label='Criar conta'
      >
        {isLoading ? <Spinner /> : 'Cadastrar'}
      </StyledButton>
    </StyledForm>
  );
};
