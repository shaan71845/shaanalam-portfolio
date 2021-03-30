import { useContext } from "react";
import { Context } from "../Context/GlobalState";
import Blog from "./Blog";

const BlogPosts = () => {
  const { state } = useContext(Context);

  return (
    <section className="blog__posts">
      <div className="container">
        <h1>My latest Blog posts</h1>
        <div className="blog__grid">
          {state &&
            state.blog_posts &&
            state.blog_posts.map((blog) => (
              <Blog blog={blog} userImg={state.author.image.asset.url} key={blog.slug} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
