import Link from "next/link";

const Page = () => {
  return (
    <>
      <h2>About me!</h2>
      <p>This is the about page.</p>
   
      <Link href='../about/sidra'><button>sidra</button></Link>
      <Link href='../about/eman'><button>eman</button></Link>

    </>
  )
}

export default Page
