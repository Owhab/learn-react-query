import { useState } from "react";
import usePosts from "../hooks/usePosts";

const Posts = () => {
  //   const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      {/* <select
        value={userId}
        onChange={(event) => {
          setUserId(parseInt(event.target.value));
        }}
      >
        <option disabled selected>
          Select User
        </option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ol>
      <button
        className="btn-prev"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button className="btn-next" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </>
  );
};

export default Posts;
