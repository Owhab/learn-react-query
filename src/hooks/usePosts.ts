import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
const usePosts = () => {
  const fetchPost = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
  });
};
export default usePosts;
