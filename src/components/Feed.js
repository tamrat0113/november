import React from "react";

import useFetch from "../hooks/useFetch";

import Spinner from "./Spinner";

function Feed() {
  //   const [posts, setPosts] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  const [posts, isLoading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  return (
    <div style={{ padding: "10px", border: "2px solid orange" }}>
      <h1>Feed</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <ol>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <br />
              {post.body}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Feed;
