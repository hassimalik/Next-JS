"use client"

import { useEffect, useState } from "react"

export default function ClientPosts() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((data) => {
            setPosts(data.slice(0, 5));
            setLoading(false);
        })
    }, [])
    if (loading) return <p>Loading.....</p>;

    return (
        <div>
            <h1>Posts(Client Fetch)</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}