'use client';

import { useRouter } from "next/navigation";

const Step2b = () => {

    const router = useRouter();

  return (
    <>

     <h2>-----Method2-----</h2>
    <p>Use router (used when we want linking inside any function like onclick event)</p>
    <p>navigate to address page through link also route generated</p>
     <p>We will use useRouter() Hook to programmatically change routes inside Name Client Component.

We should use the component for navigation unless you have a specific requirement for using useRouter.

</p> <button type="button" onClick={() => router.push('../name/address')}>address </button>
    
     
    </>
  )
}

export default Step2b
