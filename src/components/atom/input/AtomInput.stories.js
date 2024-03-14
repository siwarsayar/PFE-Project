// AtomInput.stories.js

import React from 'react';
import { Meta } from '@storybook/react';
import { AtomInput } from './AtomInput'; // Supposons que AtomInput.js est dans le même répertoire

// Définition des métadonnées pour les stories
export default {
  title: 'AtomInput',
  component: AtomInput,
};

// Définition de la story pour le AtomInput
export const Default = () => (
  <AtomInput
    id="default-input"
    name="default-input"
    placeholder="Enter your text here"
  />
);

export const Required = () => (
  <AtomInput
    id="required-input"
    name="required-input"
    placeholder="Enter your text here"
    required
  />
);

export const WithValue = () => (
  <AtomInput
    id="value-input"
    name="value-input"
    placeholder="Enter your text here"
    value="Default value"
  />
);
