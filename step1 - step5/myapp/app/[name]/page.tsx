export default function GiveName({ params, searchParams }: {
    params: { name: string },
    searchParams: { id: string },
  }) {
    
      return (
        <>
             *  My name is {params.name}.
              
        </>
      )
    }