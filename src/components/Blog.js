import dateformat from "dateformat";

const Blog = ({ blog, userImg }) => {
  return (
    <a href={blog.url} target="_blank" rel="noreferrer" className="blog__link">
      <div className="blog">
        <div className="blog__coverImg">
          <img src={blog.cover_image} alt="cover" />
        </div>
        <div className="blog__description">
          <h4>
            Setup your ReactJS + Tailwind CSS Project by creating a template 🔥
          </h4>

          <div className="blog__desctiption__userDetails">
            <img src={userImg} alt="Shaan Alam" />
            <p>
              {blog.name} on{" "}
              {dateformat(blog.published_timestamp, "dddd, mmmm dS, yyyy")}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Blog;
