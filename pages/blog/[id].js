import styles from "../../styles/BlogArticle.module.scss";
import ReactMarkdown from "react-markdown";
import CodeSnippet from "../../components/CodeSnippet";

const Post = ({ post }) => {
  console.log(post);

  const renderers = {
    code: function CS({ language, value }) {
      return <CodeSnippet language={language} code={value} />;
    },
  };

  return (
    <section className={styles.post}>
      <div className={styles.container}>
        <header>
          <img src={post.cover_image} alt={post.title} />
          <h1>{post.title}</h1>
        </header>
        <div className={styles["post-body"]}>
          <ReactMarkdown
            className="md-content"
            renderers={renderers}
            linkTarget="_blank"
          >
            {post.body_markdown}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default Post;

export async function getStaticProps(context) {
  const res = await fetch(`https://dev.to/api/articles/${context.params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://dev.to/api/articles/me/published", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.DEV_API_KEY,
    },
  });
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
}
