import React, { ForwardRefRenderFunction, forwardRef } from 'react';

interface Props {
  label: string;
  textarea?: boolean;
  [x: string]: any;
}

type InputElement = HTMLInputElement | HTMLTextAreaElement;

const Input = forwardRef<InputElement, Props>(
  ({ label, textarea = false, ...props }, ref) => {
    const classes =
      'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return (
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea
            ref={ref as React.MutableRefObject<HTMLTextAreaElement>}
            className={classes}
            {...props}
          />
        ) : (
          <input
            ref={ref as React.MutableRefObject<HTMLInputElement>}
            className={classes}
            {...props}
          />
        )}
      </p>
    );
  },
);

export default Input;
