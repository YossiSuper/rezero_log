import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";

type Props = {
  posts: [
    {
      frontMatter: {
        title?: string;
        date?: Date;
        description?: string;
      };
      slug?: string;
    }
  ];
};

const index = (props: Props) => {
  console.log(props);
  return (
    <div className="my-8">
      <h1 className="display-3">記事一覧</h1>
      {props.posts.map((post) => (
        <div key={post.slug}>
          <Link href={`/articles/${post.slug}`}>
          <p>{post.frontMatter.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = () => {
  const files = fs.readdirSync("articles");
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fileContent = fs.readFileSync(`articles/${fileName}`, "utf-8");
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default index;
