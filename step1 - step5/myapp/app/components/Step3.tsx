import Link from "next/link"

const Step3 = () => {
  return (
    <>
     <h1>Step 3: Route Groups </h1>
     <p>A route group can be created by wrapping a folder’s name in parenthesis: (folderName)</p>
    <h2>segment name not shown in route if written in paranthesis</h2>
     <p>go to cnic page</p>
     {/* present in (private) but not shown in url*/}
     <Link href={'../yourcnic'}>cnic</Link>
     <p>go to name page</p>
        {/* present in (public) but not shown in url*/}
     <Link href={'../yourname'}>name</Link>
    </>
  )
}

export default Step3
