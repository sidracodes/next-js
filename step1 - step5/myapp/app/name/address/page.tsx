import Link from "next/link"

const Address = () => {
  return (
    <>
    <Link href={'../../'}>Back to home</Link>
      <p>address directory inside name directory
     </p> 
      <Link href={'../../name'}>Back to name</Link>
      
    </>
  )
}

export default Address
