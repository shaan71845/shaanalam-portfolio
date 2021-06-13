import { SlideIn, SlideOut } from "./withTransition.sc";
import styles from "../styles/PageTransition.module.scss";
import { motion } from "framer-motion";

/** @Type - Higher Order Component (HOC)
 * @Desc - Will return the Original component with the <SlideIn /> and <SlideOut /> component
 */

const withTransition = (OriginalComponent) => {
  const ComponentWithTransition = (props) => (
    <>
      <OriginalComponent {...props} />
      <motion.div
        className={styles["slide-in"]}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className={styles["slide-out"]}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1 }}
      />
    </>
  );

  return ComponentWithTransition;
};

export default withTransition;
