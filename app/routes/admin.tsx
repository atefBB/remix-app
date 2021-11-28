import { Outlet, Link, useLoaderData } from "remix";

import { getPost } from "~/post";
import type { Post } from "~/post";

import adminStyles from "~/styles/admin.css";

export let loader = () => {
  return getPost();
};

export let links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
};

export default function Admin() {
  let posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <nav>
        <h1>Admin</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
