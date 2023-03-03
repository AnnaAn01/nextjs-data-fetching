export default function handler(req, res) {
  res.status(200).json({
    posts: [
      {
        title: "This is all about end points",
        content: "This is all about api end points111",
      },
      {
        title: "How to guide on SSR 2",
        content: "This is all about server side rendering",
      },
      {
        title: "Post number 3",
        content: "This is post number 3",
      },
      {
        title: "Post number 4",
        content: "This is post number 4",
      },
      {
        title: "Post number 5",
        content: "This is post number 5",
      },
    ],
  });
}
