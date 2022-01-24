import React, { useEffect, useState } from "react";
import axios from "axios";
const POST_API = "https://jsonplaceholder.typicode.com/posts";

export function UseQuery() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(POST_API).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div>
        {posts.map((posts) => (
          <div key={posts.id}>
            userid={posts.userId}
            id={posts.id}
            title={posts.title}
            body={posts.body}
          </div>
        ))}
      </div>
    </div>
  );
}
