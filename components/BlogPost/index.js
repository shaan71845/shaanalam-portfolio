import { useEffect } from "react";
import { slideUpVariants } from "../../utils/variants";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PostWrapper,
  PostCover,
  PostDescription,
  PostHeading,
  PostText,
  PostLinks,
  PostLink,
} from "./BlogPost.sc";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const [headingRef, headingInView] = useInView({
    rootMargin: "-100px",
  });
  const [textRef, textInView] = useInView();
  const [linkRef, linkInView] = useInView();
  const [imageRef, imageInView] = useInView();

  const headingControls = useAnimation();
  const textControls = useAnimation();
  const linkControls = useAnimation();
  const imageControls = useAnimation({});
  const imageCoverControls = useAnimation();

  useEffect(() => {
    if (headingInView) {
      headingControls.start({
        y: "0%",
      });
    }
  }, [headingInView, headingControls]);

  useEffect(() => {
    if (textInView) {
      textControls.start({
        y: "0",
      });
    }
  }, [textInView, textControls]);

  useEffect(() => {
    if (linkInView) {
      linkControls.start({
        y: "0",
      });
    }
  }, [linkInView, linkControls]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start({
        scale: 1,
      });

      imageCoverControls.start({
        scaleX: 0,
      });
    }
  }, [imageInView, imageControls, imageCoverControls]);

  return (
    <PostWrapper>
      <PostCover>
        <motion.div
          className="post-cover-inner"
          initial={{ scaleX: 1 }}
          animate={imageCoverControls}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
        <motion.img
          ref={imageRef}
          src={post?.cover_image}
          alt="Covid Tracker"
          initial={{ scale: 1.6 }}
          animate={imageControls}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      </PostCover>
      <PostDescription>
        <PostHeading>
          <motion.div
            ref={headingRef}
            className="post-heading-inner"
            initial={{ y: "100%" }}
            animate={headingControls}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1>{post?.title}</h1>
          </motion.div>
        </PostHeading>
        <PostText>
          <motion.div
            ref={textRef}
            className="post-text-inner"
            initial={{ y: "100%" }}
            animate={textControls}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            <p>{post?.description}</p>
          </motion.div>
        </PostText>
        <PostLinks>
          <PostLink>
            <motion.div
              className="post-link-inner"
              ref={linkRef}
              initial={{ y: "100%" }}
              animate={linkControls}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              <Link href={`/blog/${post.id}`}>
                <a>Read more &rarr;</a>
              </Link>
            </motion.div>
          </PostLink>
        </PostLinks>
      </PostDescription>
    </PostWrapper>
  );
};

export default BlogPost;
