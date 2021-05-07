import { AlertContainer } from "../styled-components/alert";

const Alert = ({ text }) => {
  return (
    <AlertContainer
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ scale: 0.78, opacity: 0 }}
    >
      <p>{text}</p>
    </AlertContainer>
  );
};

export default Alert;
