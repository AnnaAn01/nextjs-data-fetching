export default function Testblog(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <div>
      <h1>Welcome to the test blog page ...</h1>
      {posts.map((item) => (
        <>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <br />
        </>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/testposts");
  const posts = await res.json();
  return {
    props: { posts }, // will be passed to our blog page component as props
  };
}
