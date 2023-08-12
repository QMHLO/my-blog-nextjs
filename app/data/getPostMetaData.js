import matter from "gray-matter";
import fs from "fs";

const getPostMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slugs = markdownPosts.map((file)=>file.replace(".md",""))
  // console.log(slugs)
  // return slugs
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};
export default getPostMetaData;
