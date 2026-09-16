import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      imageUrl:
        "https://ik.imagekit.io/project11/image_qffcA0eG7.jpg?updatedAt=1789312488345",
      caption: "Iron Man and SpiderMan",
    },
  ]);

  useEffect(() => {
    const data = axios.get("http://localhost:3000/Feed").then((res) => {
      setPosts(res.data.feed);
    });
  }, []);

  return (
    <div className=" grid grid-cols-1 md:flex md:flex-row">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post._id}
            className=" bg-gray-900  w-full  p-10 rounded-3xl"
          >
            <img
              className=" object-fill hover:scale-120 hover:transition duration-335"
              src={post.imageUrl}
              alt={post.caption}
            />
            <p className=" font-mono text-white">{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No Posts Available</h1>
      )}
    </div>
  );
};

export default Feed;
