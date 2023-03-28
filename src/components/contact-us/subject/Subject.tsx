import { IconChecked, IconUnchecked } from "icons";
import styles from './Subject.module.css';
import { DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

type SubjectProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  id: string;
  currentCheckedRadio: string;
  setCurrentCheckedRadio: (id: string) => void
}

//Same idea as in text input

export const Subject = forwardRef(
  ({
     currentCheckedRadio,
     id,
     setCurrentCheckedRadio,
     ...props
   }: SubjectProps, ref: ForwardedRef<HTMLInputElement>) => {

    return (
      <li>
        <label className={styles.label}>
          <input
            {...props}
            type="radio"
            className={styles.radioButton}
            ref={ref}
            onClick={() => setCurrentCheckedRadio(id)}
          />
          {id === currentCheckedRadio ? <IconChecked /> : <IconUnchecked {...props} />}
          <span>General inquiry</span>
        </label>
      </li>
    );
  });
