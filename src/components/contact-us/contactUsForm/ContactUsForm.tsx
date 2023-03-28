import styles from "./ContactUsForm.module.css";
import { Input } from "components";
import letterImage from 'assets/letter.png';
import { useForm } from "react-hook-form";
import { EMAIL_PATTERN, PHONE_NUMBER_PATTERN } from "../../../constants";
import { Subject } from "../subject";
import { useState } from "react";

enum FIELD_NAMES {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'secondName',
  EMAIL = 'email',
  PHONE_NUMBER = 'phoneNumber',
  MESSAGE = 'message'
}


//I find it most convenient to use the React-hook-form library for form validation.

export const ContactUsForm = () => {
  const [currentCheckedRadio, setCurrentCheckedRadio] = useState('1');
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onFormSubmit = (data: unknown) => {
    console.log(data);
  };

  const values = watch();

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Input
        {...register(FIELD_NAMES.FIRST_NAME, { required: true, maxLength: 20 })}
        type="text"
        label="First Name"
        isDirty={values[FIELD_NAMES.FIRST_NAME]}
        aria-invalid={!!errors[FIELD_NAMES.FIRST_NAME]}
      />
      <Input
        {...register(FIELD_NAMES.LAST_NAME, { required: true, maxLength: 20 })}
        type="text"
        label="Last Name"
        isDirty={values[FIELD_NAMES.LAST_NAME]}
        isError={!!errors[FIELD_NAMES.LAST_NAME]}
      />
      <Input
        {...register(FIELD_NAMES.EMAIL, { required: true, pattern: EMAIL_PATTERN })}
        type="email"
        label="Email"
        isDirty={values[FIELD_NAMES.EMAIL]}
        isError={!!errors[FIELD_NAMES.EMAIL]}
      />
      <Input
        {...register(FIELD_NAMES.PHONE_NUMBER, { required: true, pattern: PHONE_NUMBER_PATTERN })}
        type="tel"
        label="Phone number"
        isDirty={values[FIELD_NAMES.PHONE_NUMBER]}
        isError={!!errors[FIELD_NAMES.PHONE_NUMBER]}
      />
      <div className={styles.subjectWrapper}>
        <p className={styles.subjectTitle}>Select subject</p>
        <ul className={styles.subjectList}>
          <Subject
            currentCheckedRadio={currentCheckedRadio}
            id="1"
            value="option1"
            setCurrentCheckedRadio={setCurrentCheckedRadio}
            {...register("radio", { required: true })}
          />
          <Subject
            currentCheckedRadio={currentCheckedRadio}
            setCurrentCheckedRadio={setCurrentCheckedRadio}
            id="2"
            value="option2"
            {...register("radio", { required: true })}
          />
          <Subject
            currentCheckedRadio={currentCheckedRadio}
            setCurrentCheckedRadio={setCurrentCheckedRadio}
            id="3"
            value="option3"
            {...register("radio", { required: true })}
          />
          <Subject
            setCurrentCheckedRadio={setCurrentCheckedRadio}
            id="4"
            currentCheckedRadio={currentCheckedRadio}
            value="option4"
            {...register("radio", { required: true })}
          />
        </ul>
      </div>
      <Input
        {...register(FIELD_NAMES.MESSAGE, { required: true, maxLength: 200 })}
        type="text"
        label="Message"
        placeholder="Write your message..."
        className={styles.messageInput}
        isDirty={values[FIELD_NAMES.MESSAGE]}
        isError={!!errors[FIELD_NAMES.MESSAGE]}
      />
      <button className={styles.formButton} type="submit">Send message</button>
      <img className={styles.letterImage} src={letterImage} alt="letter" />
    </form>
  );
};
