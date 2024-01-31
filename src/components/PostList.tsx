import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PostList.module.css";
import { Post } from "@/types";

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <div key={post.id} className={styles.postItem}>
          <Link href={`/${post.id}`}>
            <h2 className={styles.postTitle}>{post.title}</h2>
          </Link>
          <div className={styles.postImage}>
            <Image
              src={post.coverImage}
              alt={post.title}
              width={200}
              height={125}
              layout="responsive"
            />
          </div>
          <p className={styles.postSummary}>{post.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
