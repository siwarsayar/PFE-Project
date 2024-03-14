import React from 'react';
import { AtomButton } from './AtomButton';

export default {
  title: 'AtomButton',
  component: AtomButton,
};

export const Primary = () => (
  <AtomButton primary>
    Primary Button
  </AtomButton>
);

export const Secondary = () => (
  <AtomButton secondary>
    Secondary Button
  </AtomButton>
);

export const Success = () => (
  <AtomButton success>
    Success Button
  </AtomButton>
);

export const Warning = () => (
  <AtomButton warning>
    Warning Button
  </AtomButton>
);

export const Danger = () => (
  <AtomButton danger>
    Danger Button
  </AtomButton>
);

export const Outline = () => (
  <AtomButton outline>
    Outline Button
  </AtomButton>
);

export const Rounded = () => (
  <AtomButton rounded>
    Rounded Button
  </AtomButton>
);


