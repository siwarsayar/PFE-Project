import React from 'react';
import { CheckBox } from './CheckBox'; 
import { action } from '@storybook/addon-actions';

export default {
  title: 'CheckBox',
  component: CheckBox,
};

export const Default = () => (
  <CheckBox label="Check me" checked={false} onChange={action('Checkbox Changed')} />
);


