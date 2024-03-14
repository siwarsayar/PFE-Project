import React from 'react';
import { AtomUpload } from './AtomUpload'; 

export default {
  title: 'AtomUpload',
  component: AtomUpload,
};

export const Default = () => (
  <AtomUpload onFileUpload={file => console.log('File uploaded:', file)} />
);


