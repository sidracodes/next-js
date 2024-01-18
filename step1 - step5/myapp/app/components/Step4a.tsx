import Link from "next/link";
import { posts } from "../data/posts";

const Step4 = () => {
  type Post ={
    id: string,
    title: string,
    date: string
  }
  return (
    <>
     <h1>Step 5: Generate Static Params</h1> 
     
     <h2>----Example1----</h2>
        <p>When you don't know the exact segment names ahead of time and want to create routes from data.
<br />
A Dynamic Segment can be created by wrapping a folder’s name in square brackets: [folderName].

</p>

     {
      posts.map(({id,title,date}:Post)=>(
        <>

        {/* (marketing) -> posts -> [id] */}

        <Link href={`../posts/${id}`}>{title}</Link>
      <br />
        </>
      ))
     }
    </>
  )
}

export default Step4
