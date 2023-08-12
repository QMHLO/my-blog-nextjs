import React from "react";
import Link from "next/link";
import { FcCalendar } from "react-icons/fc";

function PostPreview({ post }) {
  return (
    <div className="border-solid border-sky-200 shadow-md p-5 mb-5 bg-slate-400 rounded-md">
      <Link href={`blogs/${post.slug}`}>
        <div className="">
          <h3 className="text-3xl mb-5">{post.title}</h3>
          <div className="flex items-center gap-x-2 mb-3">
            <FcCalendar className="text-2xl"/>
            <p className="text-xl">{post.date}</p>
          </div>
        </div>
        <p className="text-xl">{post.description}</p>
      </Link>
    </div>
  );
}

export default PostPreview;
