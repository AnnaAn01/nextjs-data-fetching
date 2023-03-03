import useSwr from "swr";
async function fetcherFunc(url) {
  const res = await fetch(url);
  return res.json();
}

export default function Blog(props) {
  //   const url = "http://localhost:3000/api/posts";
  //   const { data, error } = useSwr(url, fetcherFunc);

  //   if (error) return <div>failed to load</div>;
  //   if (!data) return <div>..loading</div>;
  //   const { posts } = data;
  const { posts } = props;
  console.log(posts);

  return (
    <div>
      <h1>Welcome to the blog page!</h1>
      <div>
        {posts.map((item) => (
          <>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3001/api/hello`);
  const { posts } = await res.json();

  return {
    props: {
      posts,
    },
  };
}
