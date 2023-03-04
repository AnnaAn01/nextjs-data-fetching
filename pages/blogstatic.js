// import useSwr from "swr";
// async function fetcherFunc(url) {
//   const res = await fetch(url);
//   return res.json();
// }

// export default function Blogstatic(props) {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   const { data, error } = useSwr(url, fetcherFunc);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>..loading</div>;
//   //   const { posts } = data;
//   const { posts } = props;
//   console.log(posts);

//   return (
//     <div>
//       <h1>Welcome to the blog page!</h1>
//       <div>
//         {posts}
//         {/* {posts.map((item) => (
//           <>
//             <h3>{item.title}</h3>
//             <p>{item.content}</p>
//             <br />
//           </>
//         ))} */}
//       </div>
//     </div>
//   );
// }

// // export async function getStaticProps(context) {
// //   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1'`);
// //   const { posts } = await res.json();
// //   console.log(posts);

// //   return {
// //     props: {
// //       posts,
// //     },
// //   };
// // }

// export async function getStaticProps(context) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//   const { title } = await res.json();
//   console.log(title);

//   return {
//     props: {
//       posts: title,
//     },
//   };
// }

import useSwr from "swr";

async function fetcherFunc(url) {
  const res = await fetch(url);
  return res.json();
}

export default function Blogstatic(props) {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const { data, error } = useSwr(url, fetcherFunc, {
    initialData: props,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>..loading</div>;

  const { title } = data;
  console.log(title);

  return (
    <div>
      <h1>Welcome to the blog page!</h1>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const { title } = await res.json();

  return {
    props: {
      title,
    },
  };
}
