import { BlogSection, Container, BlogGrid } from "../styled-components/blogs";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import { motion } from "framer-motion";

const blogGridVariants = {
  hidden: 0,
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const postVariants = {
  hidden: { scale: 0.76, y: 30, opacity: 0 },
  show: { scale: 1, y: 0, opacity: 1 },
};

const Blogs = ({ posts }) => {
  return (
    <>
      <BlogSection>
        <Container>
          <Sidebar />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Blog Posts
          </motion.h1>
          <BlogGrid variants={blogGridVariants} initial="hidden" animate="show">
            {posts.map((post) => (
              <Post post={post} key={post.id} variants={postVariants} />
            ))}
          </BlogGrid>
        </Container>
      </BlogSection>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?username=shaan71845");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
