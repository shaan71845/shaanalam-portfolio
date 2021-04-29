import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

const Blogs = ({ posts }) => {
  return (
    <BlogSection>
      <Container>
        <Sidebar />
        <h1>Blog Posts</h1>
        <BlogGrid>
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

export default Blogs;

const BlogSection = styled.section`
  height: 100vh;
  width: 100%;
  background: #030303;
`;

const Container = styled.div`
  padding: 6rem 0;
  width: 80%;
  margin: auto;

  > h1 {
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    font-size: 200%;
  }
`;

const BlogGrid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.3rem;
`;

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?username=shaan71845");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
