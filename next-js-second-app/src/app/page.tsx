"use client"
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-4 ml-4 text-xl">
      <nav>
        <Link href="/posts" prefetch={true}>
          Posts (Server + Client)
        </Link>
      </nav>
    </div>
  )
}