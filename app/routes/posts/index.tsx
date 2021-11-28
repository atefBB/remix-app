import { Link, useLoaderData } from "remix";

import { getPost } from "~/post";
import type { Post } from "~/post";

export function loader() {
  return getPost();
}

export default function Posts() {
  let posts = useLoaderData<Post[]>();
  console.log({ posts });

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}