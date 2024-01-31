import React, { useState, useEffect } from "react";
import type { NextPage, GetStaticProps } from "next";
import PostList from "../components/PostList";
import styles from "../styles/Home.module.css";
import { Post } from "@/types";
import postsMock from "../data/posts.json";
import spinnerStyles from "../styles/Spinner.module.css";
import Layout from "../components/Layout";

// export const getStaticProps: GetStaticProps = async () => {
//   // const res = await fetch('https://your-api-endpoint/posts');
//   // const posts: Post[] = await res.json();

//   // return {
//   //   props: {
//   //     posts,
//   //   },
//   // };

//   return {
//     props: {
//       posts: postsMock,
//     },
//   };
// };

// interface HomeProps {
//   posts: Post[];
// }

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // const response = await fetch('https://your-api-endpoint/posts');
      // const data = await response.json();
      setTimeout(async () => {
        setPosts(postsMock);
        setLoading(false);
      }, 1500);
    };

    fetchPosts();
  }, []);

  return loading ? (
    <div className={spinnerStyles.spinner}></div>
  ) : (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>My Blog</h1>
        <PostList posts={posts} />
      </div>
    </Layout>
  );
};

export default Home;
