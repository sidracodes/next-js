import './globals.css';
import Link from "next/link"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
      <Link href={'./'}> <button>Home</button></Link>
      <Link href={'./about'}> <button>About</button></Link>
      <Link href={"./contact-us"}><button>Contact</button></Link>
      <Link href={"./posts"}><button>Posts</button></Link>
      <Link href={"./blogs"}><button>Blogs</button></Link>
      </div>
      {children}
  
        </body>
    </html>
  )
}
