import React from "react";
import Link from "next/link";
import getPostMetaData from "../data/getPostMetaData";
import PostPreview from "../components/PostPreview";

function BlogsPage() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview post={post} key={post.slug} />
  ));
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center mb-10">Welcome To My Blogs</h1>
      <h2>{postPreviews}</h2>
    </div>
  );
}

export default BlogsPage;
