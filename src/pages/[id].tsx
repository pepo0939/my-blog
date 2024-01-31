import { GetStaticPaths, GetStaticProps } from "next";
import styles from "../styles/Post.module.css";
import Image from "next/image";
import { Post as PostType } from "../types";
import postsMock from "../data/posts.json"; // Importa los posts

interface PostPageProps {
  post: PostType;
}

const PostPage = ({ post }: PostPageProps) => {
  return (
    <div className={styles.postContainer}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <div className={styles.postMeta}>
        <span>{post.date}</span>
        <span> | Autor: {post.author}</span>
      </div>
      <div className={styles.coverImage}>
        <Image src={post.coverImage} alt={`Cover Image for ${post.title}`} layout='fill' objectFit='cover' />
      </div>
      <p className={styles.postContent}>{post.content}</p>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsMock.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = postsMock.find((post) => post.id.toString() === params.id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
