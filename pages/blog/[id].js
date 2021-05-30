const Post = ({ post }) => {
  console.log(post);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam commodi
        qui voluptatum, pariatur aspernatur excepturi aut corporis vitae odit
        quas vero, rem neque quam aliquam magnam eaque, sapiente eum ut.
      </p>
    </div>
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
