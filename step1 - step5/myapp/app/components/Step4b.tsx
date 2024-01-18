import Link from 'next/link'


const Step4b = () => {
  return (
    <>
       <div>
       <h1>Step 4: Dynamic Segments</h1> 
       
          <p>dynamic segments mean routes generated according to real time data</p>
          <br/>
          <Link href="/zia">Go to Zia page</Link>
          <br/>
          <Link href="/zeeshan">Go to Zeeshan page</Link>
          <br/>
          <Link href="/hira">Go to Hira page</Link>
          </div>
    </>
  )
}

export default Step4b
