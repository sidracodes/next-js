import { use } from "react";
import Link from "next/link";
async function getPosts() {
  let posts = await fetch("https://dummyjson.com/posts?limit=3");
  return posts.json();
}
const Layout = ({children}) => {
  let { posts } = use(getPosts());
  
  

  return (
    <>
      <h2>Posts page!</h2>
      <p>This is posts page.</p>
      <ul>
        {posts.map((currentElement) => (
          <li key={currentElement.id}>
            <Link href={`./posts/${currentElement.id}`}> {currentElement.title}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </>
  );
};

export default Layout;
