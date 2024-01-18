import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const getBlogsData = async() =>{
   try{
    const blogdata =await fetch("https://cdn.contentful.com/spaces/60i98x5rovgf/entries?access_token=-vD_Odximisur47oR0oztYD7m8yA3Mr6nY9D3dRc3X8&content_type=blog")
if(!blogdata.ok){
    console.log("failed to load data")
    throw new Error("Error in Api")

}
return blogdata.json()
   }
   catch(err){
    console.log(err)
   }
   }
const Blogs =async () => {
    const blogsdata =await getBlogsData()
    console.log(blogsdata)
  return (
    <>
   <h2>---Title of page as simple text</h2>
      <div>
        {blogsdata.items[0].fields.title}
        <br />
        <h2>---Description of page as rich text</h2>
        {documentToReactComponents(blogsdata.items[0].fields.description)}
      </div>
     
    </>
  )
}

export default Blogs
