import useSwr from "swr";
async function fetcherFunc(url) {
  const res = await fetch(url);
  return res.json();
}

export default function Blog() {
  const url = "http://localhost:3000/api/posts";
  const { data, error } = useSwr(url, fetcherFunc);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>..loading</div>;
  const { posts } = data;
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

// 1. Create an endpoint called posts hard code with following data:

// {
//   posts: [
//     {
//       title: "This is all about end points",
//       content: "This is all about api end points111",
//     },
//     {
//       title: "How to guide on SSR 2",
//       content: "This is all about server side rendering",
//     },
//     {
//       title: "Post number 3",
//       content: "This is post number 3",
//     },
//     {
//       title: "Post number 4",
//       content: "This is post number 4",
//     },
//     {
//       title: "Post number 5",
//       content: "This is post number 5",
//     },
//   ];
// }

// 2. Add the SWR data fetch hook to get data on the lient side

// 3. Create a statically generated page using getStaticProps (Static Generation)

// 4. Use SWR with getStaticProps
