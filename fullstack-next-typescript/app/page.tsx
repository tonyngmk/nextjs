import Link from "next/link"

export const metadata = {
  title: "Next13"
}

async function getPosts() {
  const res = await fetch('/api/getPosts')
  
}

export default function Home() {
  return (
    <main className="py-4 px-48">
      <Link 
        className="bg-teal-500 text-black font-medium py-2 px-4 rounded-md"
        href="/dashboard">
          Go to the dashboard
      </Link>
    </main>
  )
}
 