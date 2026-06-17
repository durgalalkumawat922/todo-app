import React, { useEffect, useState } from "react";

export default function Contact() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div className="mt-20 flex flex-wrap gap-5 p-5">
      {posts?.map((post) => (
        <div
          className="border border-red-600 rounded-lg p-5 gap-4 flex flex-col "
          key={post?.id}
        >
          <h1>Id: {post?.id}</h1>
          <h1>Title: {post?.title}</h1>
        </div>
      ))}
    </div>
  );
}