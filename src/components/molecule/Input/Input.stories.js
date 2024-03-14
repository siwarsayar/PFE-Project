import React from 'react';
import { Input } from './Input'; 

export default {
  title: 'Input',
  component: Input,
};

export const Default = () => (
  <Input label="Username" placeholder="Enter your username"  errorMessage="Invalid password"/>
);

export const WithErrorMessage = () => (
  <Input label="Email" placeholder="Enter your email" errorMessage="Invalid email address" />
);


