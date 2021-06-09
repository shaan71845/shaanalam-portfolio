import styles from "../../styles/BlogArticle.module.scss";
import ReactMarkdown from "react-markdown";
import CodeSnippet from "../../components/CodeSnippet";
import gfm from "remark-gfm";
import Moment from "react-moment";
import withTransition from "../../HOC/withTransition";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const Post = ({ post }) => {
  console.log(post);

  const renderers = {
    code: ({ language, value }) => {
      return <CodeSnippet language={language} code={value} />;
    },
    link: (props) => {
      return <a href={props.href}>{props.children}</a>;
    },
  };

  return (
    <section className={styles.post}>
      <Navbar theme="dark" />
      <header className={styles.header}>
        <Link href="/blogs">
          <a className={styles["go-back-btn"]}>Go Back</a>
        </Link>
        <img src={post.cover_image} alt={post.title} />
        <div className={styles.container}>
          <h1>{post.title}</h1>
          <div className={styles.tags}>
            <div className={styles["created-at"]}>
              <img src={post.user.profile_image} alt="Shaan Alam" />
              <small>
                Shaan Alam on{" "}
                <Moment format="D MMM YYYY">{post.created_at}</Moment>
              </small>
            </div>
            {post.tags.map((tag) => (
              <small key={tag}>#{tag}</small>
            ))}
          </div>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles["post-body"]}>
          <ReactMarkdown
            className="md-content"
            renderers={renderers}
            plugins={[gfm]}
            linkTarget="_blank"
          >
            {post.body_markdown}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default withTransition(Post);

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
