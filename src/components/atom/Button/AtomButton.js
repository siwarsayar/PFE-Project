import React from 'react';
import classNames from 'classnames';
import './AtomButton.css'; 

function AtomButton({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classNames(
    rest.className,
    'AtomButton',
    {
      'primary': primary,
      'secondary': secondary,
      'success': success,
      'warning': warning,
      'danger': danger,
      'outline': outline,
      'rounded': rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

AtomButton.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default AtomButton;
