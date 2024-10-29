import React from 'react';
import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePost = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src='/menu.png' alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )} */}
          <Image src='/menu.png' alt="" fill className={styles.img} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}
              Cole Palmer
            </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}
              01.01.2024
            </span>
          </div>
        </div>
        <div className={styles.content}>desc</div>
      </div>
    </div>
  )
}

export default SinglePost