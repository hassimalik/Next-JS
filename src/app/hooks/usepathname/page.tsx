"use client"

import { usePathname } from "next/navigation"

export default function usePathnamePage() {
    const pathname = usePathname()
    return (
        <div>
            <h1 className="text-3xl text-orange-400 text-center">usePathname Example</h1>
            <div className="mt-4 flex justify-center gap-4 text-center">
                Current Path:<p className="inline text-red-400">{pathname}</p></div>
        </div>
    )
}