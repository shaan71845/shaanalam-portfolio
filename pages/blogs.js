import { BlogSection, Container, BlogGrid } from "../styled-components/blogs";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import { motion } from "framer-motion";

const Blogs = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default Blogs;

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
  };
}
