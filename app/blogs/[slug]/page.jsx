import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../data/getPostMetaData";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

function BlogSingPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="p-5 shadow-md my-10">
      <article class="prose lg:prose-xl prose-zinc">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}

export default BlogSingPage;
