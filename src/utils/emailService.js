import emailjs from 'emailjs-com';

export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    formRef.current,
    process.env.REACT_APP_USER_ID
  );
};
