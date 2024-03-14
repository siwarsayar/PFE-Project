import React from 'react';
import { ButtonUpload } from './ButtonUpload'; 
import { action } from '@storybook/addon-actions';

export default {
  title: 'ButtonUpload',
  component: ButtonUpload,
};

export const Default = () => (
  <ButtonUpload labelText="Upload File" onFileUpload={action('File Uploaded')} />
);


