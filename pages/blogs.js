import { BlogSection, Container, BlogGrid } from "../styled-components/blogs";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import { motion } from "framer-motion";
import blogStyles from "../styles/Blog.module.scss";
import Navbar from "../components/Navbar";
import { slideUpVariants } from "../utils/variants";
import BlogPost from "../components/BlogPost";
import withTransition from "../HOC/withTransition";

const Blogs = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <section className={blogStyles["blogs-intro-section"]}>
        <Navbar />
        <div className={blogStyles.container}>
          <h1>
            <div className={blogStyles["h1-inner"]}>
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
              >
                Some of the blogs
              </motion.div>
            </div>
            <div className={blogStyles["h1-inner"]}>
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
              >
                I've written!!
              </motion.div>
            </div>
          </h1>
          <p>
            <div className={blogStyles["p-inner"]}>
              <motion.div
                variants={slideUpVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              >
                I write blogs about Frontend Development, backend development,
                and anything related to coding.
              </motion.div>
            </div>
          </p>
        </div>
      </section>
      <section className={blogStyles["blogs-section"]}>
        <div className={blogStyles.blogs}>
          {posts?.map((post) => (
            <BlogPost post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </>
  );
};

export default withTransition(Blogs);

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.DEV_API_KEY,
    },
  });
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    // revalidate: 60 * 60 * 24,
  };
}
