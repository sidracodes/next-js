import { posts } from "../../../data/posts"

//=========== STEP 5: generating static param ==============



export async function generateStaticParams() {
  const ids: string[]=["1","2"];
  return ids.map(id=> ({id:id}))
}




// =========== generates html during build time =============


async function getPost(id: string) {
    const post = posts.find( post => post.id === id )
    return post;
}


export default async function page ({params}:{params:{id: string}})  {
    const {id} = params;
    const post = await getPost(id)
  return (
    <>
    <h5>Post no:{post!.id}</h5>
      <h2>{post!.title}</h2>
      <h4>{post!.date}</h4>
    </>
  )
}


