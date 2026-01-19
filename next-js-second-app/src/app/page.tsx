"use client"
import Counter from '@/app/components/Counter'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-4 ml-4 text-xl">
      <h1>TurboPack is insane</h1>
      <Counter />
    </div>
  )
}