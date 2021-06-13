import { SlideIn, SlideOut } from "./withTransition.sc";
import styles from "../styles/PageTransition.module.scss";
import { motion } from "framer-motion";

export const parentContainerVariant = {
  hidden: {
    opacity: 0,
    transform: "translateX(300px)",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: {
      delay: 0.2,
      type: "spring",
      bounce: 0,
      damping: 20,
    },
  },
  exit: {
    transform: "translateX(-5%)",
    transition: {
      duration: 0.6,
    },
  },
};

const logoVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

/**
 * Animation variants for the logo that appears on page exit.
 */
export const svgVariants = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  visible: {
    opacity: 0,
    display: "none",
  },
  exit: {
    opacity: 1,
    display: "block",
  },
};

/**
 * Animation variants for the logo path that animates on page exit.
 */
export const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 0,
  },
  exit: {
    pathLength: 1,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

/** @Type - Higher Order Component (HOC)
 * @Desc - Will return the Original component with the <SlideIn /> and <SlideOut /> component
 */

const withTransition = (OriginalComponent) => {
  const ComponentWithTransition = (props) => (
    <>
      <motion.div
        variants={parentContainerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <OriginalComponent {...props} />
      </motion.div>
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

      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logo}
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <g clip-path="url(#clip0)">
          <motion.path
            d="M47.2547 0.745346H0.745361V47.2547H47.2547V0.745346Z"
            stroke="white"
            stroke-width="10"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M18.1268 31.3926C18.7628 31.3926 19.3225 31.2209 19.8059 30.8774C20.302 30.534 20.5501 30.0188 20.5501 29.3319C20.5501 28.6322 20.2829 28.098 19.7487 27.7291C19.2271 27.3602 18.4766 27.0422 17.4971 26.7751C16.5304 26.4952 15.8244 26.2535 15.3792 26.05C14.9467 25.8464 14.5333 25.5793 14.1389 25.2486C13.3503 24.5871 12.9559 23.5631 12.9559 22.1766C12.9559 21.0445 13.3566 20.0714 14.158 19.2572C14.9721 18.4431 16.0788 18.0361 17.4781 18.0361C18.1522 18.0361 18.8519 18.1378 19.5769 18.3414C20.3147 18.5322 20.7727 18.6276 20.9508 18.6276C21.1288 18.6276 21.2879 18.5004 21.4278 18.246H21.6377L21.7712 22.1003H21.4659C20.8554 20.9936 20.213 20.1095 19.5388 19.448C18.8773 18.7739 18.1522 18.4368 17.3636 18.4368C16.5876 18.4368 15.9834 18.6212 15.5509 18.9901C15.1184 19.3463 14.9022 19.8297 14.9022 20.4402C14.9022 21.0381 15.1566 21.5024 15.6654 21.8331C16.1869 22.1512 16.823 22.4119 17.5735 22.6155C18.324 22.819 18.8137 22.9589 19.0427 23.0352C19.2844 23.1116 19.5769 23.2197 19.9204 23.3596C20.2766 23.4868 20.5628 23.6267 20.779 23.7794C21.008 23.9193 21.2433 24.1037 21.485 24.3327C21.7394 24.549 21.9366 24.7907 22.0765 25.0578C22.42 25.6684 22.5917 26.3934 22.5917 27.233C22.5917 28.6068 22.1592 29.7135 21.2942 30.553C20.4419 31.3798 19.3162 31.7933 17.9169 31.7933C17.1918 31.7933 16.3586 31.6979 15.4173 31.5071C14.4887 31.3163 13.9736 31.2209 13.8718 31.2209C13.6937 31.2209 13.522 31.4117 13.3566 31.7933H13.0895L12.8987 27.2521H13.2231C13.7827 28.3588 14.4951 29.3255 15.3601 30.1523C16.2378 30.9791 17.16 31.3926 18.1268 31.3926ZM30.8456 31.24L29.4526 27.1185H25.6746L24.2054 31.24H25.6364V31.6025H22.7171V31.24H23.6139L28.4795 18.1315H30.0442L34.8526 31.24H35.7303V31.6025H29.4907V31.24H30.8456ZM27.6399 21.6996L25.8463 26.6987H29.2999L27.6399 21.6996Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <motion.rect
              width="48"
              height="48"
              fill="white"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </>
  );

  return ComponentWithTransition;
};

export default withTransition;
