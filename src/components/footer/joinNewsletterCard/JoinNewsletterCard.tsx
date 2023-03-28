import styles from './JoinNewsletterCard.module.css';
import { useForm } from "react-hook-form";
import { EMAIL_PATTERN } from "../../../constants";
import clsx from "clsx";

export const JoinNewsletterCard = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Join Our NewsLetter</h3>
      <form className={styles.actionsWrapper} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={clsx(styles.input, errors.email && styles.error)}
          type="email"
          placeholder="Your email address"
          {...register('email', { required: true, pattern: EMAIL_PATTERN })}
        />
        <button className={styles.button} type="submit">Subscribe</button>
      </form>
      <p className={styles.note}>* Will send you weekly updates for your better tool management.</p>
    </div>
  );
};
