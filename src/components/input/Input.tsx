import {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState
} from "react";
import styles from './Input.module.css';
import clsx from "clsx";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  type: HTMLInputTypeAttribute;
  label: string;
  isDirty?: boolean;
  isError?: boolean;
  placeholder?: string;
  className?: string;
}

// Creating a custom input that complements the capabilities of the native one for convenient interaction with react-hook-form

export const Input = forwardRef(
  ({
     type,
     label,
     placeholder,
     className,
     isDirty,
     isError,
     ...props
   }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const [isActive, setIsActive] = useState(false);

    const onFocus = () => {
      setIsActive(true);
    };

    const onBlur = () => {
      setIsActive(false);
    };

    return (
      <label className={clsx(styles.inputWrapper, className)}>
      <span className={clsx((isActive || isDirty) && styles.labelActive, isError && styles.labelError)}>
        {label}
      </span>
        <input
          {...props}
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          className={clsx(styles.input, isActive && styles.inputActive, isError && styles.inputError)}
        />
      </label>
    );
  });
