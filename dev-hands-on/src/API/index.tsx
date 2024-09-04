import React, { FC, useEffect, useState } from "react";
import axios from "axios";

export const APICall: FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios("https://catfact.ninja/facts?page=1&limit=50")
      .then((response) => {
        const data = response.data;
        setPosts(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ul style={{ height: "500px", overflow: "auto" }}>
        {posts.length > 0 &&
          posts.map((post, index) => (
            <li style={{ textAlign: "left", padding: "1rem" }} key={index}>
              {post.fact}
            </li>
          ))}
      </ul>
    </div>
  );
};
