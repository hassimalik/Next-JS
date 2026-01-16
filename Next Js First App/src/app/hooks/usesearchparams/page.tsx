"use client"

import { useSearchParams } from "next/navigation"

export default function useSearchparamsPage() {
    const searchparams = useSearchParams()
    return (
        <p>So u searched for {searchparams} in path or routes.</p>
    )
}