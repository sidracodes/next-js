import { use } from "react";
import styles from "./page.module.css"
async function getPost(id) {
  let post = await fetch(`https://dummyjson.com/posts/${id}`);
  return post.json();
  
}
const Page = ({params}) => {
    let id = params.id;
    let post = use(getPost(id));
  return (
    <div>
      <p className={styles.ptxt}> <span className={styles.txt}>ID:</span>  {post.id}</p>
      <p className={styles.ptxt}><span className={styles.txt}>USER ID:</span>  {post.userId}</p>
      <p className={styles.ptxt}><span className={styles.txt}>Title:</span>  {post.title}</p>
      <p className={styles.ptxt}><span className={styles.txt}>Description:</span>  {post.body}</p>
      <p className={styles.ptxt}><span className={styles.txt}>Tags:</span>  {post.tags}</p>
      <p className={styles.ptxt}><span className={styles.txt}>Reactions: </span> {post.reactions}</p>
      
      
    </div>
  )
}

export default Page
