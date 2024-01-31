import { Post } from "@/types";

const Post = ({ post }: { post: Post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>
);

export default Post;
