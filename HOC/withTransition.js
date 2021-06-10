import { SlideIn, SlideOut } from "./withTransition.sc";

/** @Type - Higher Order Component (HOC)
 * @Desc - Will return the Original component with the <SlideIn /> and <SlideOut /> component
 */

const withTransition = (OriginalComponent) => {
  const ComponentWithTransition = (props) => (
    <>
      <OriginalComponent {...props} />
      <SlideIn
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
      <SlideOut
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
