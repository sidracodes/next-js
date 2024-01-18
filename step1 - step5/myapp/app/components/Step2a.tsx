import Link from "next/link";

const Step2a = () => {
  return (
    <>
          <h1>Step 2: Linking</h1>
    <h2>-----Method1-----</h2>
    <p>Link component from next</p>
    <h2>navigating,linking,routing</h2>
    <p>navigate to name page through link also route generated</p>
    <Link href={'../name'}>name</Link>
     
    </>
  )
}

export default Step2a
