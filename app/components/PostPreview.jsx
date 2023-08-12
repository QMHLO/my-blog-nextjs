import React from "react";
import Link from "next/link";

function PostPreview({ post }) {
  return (
    <div className="border-solid border-sky-200 shadow-md p-5 mb-5 bg-slate-400">
      <Link href={`blogs/${post.slug}`}>
        <div className="flex items-center justify-between">
          <h3 className="text-3xl mb-5">{post.title}</h3>
          <p className="text-2xl">{post.date}</p>
        </div>
        <p className="text-xl">{post.description}</p>
      </Link>
    </div>
  );
}

export default PostPreview;
