"use client";

import { useEffect, useState } from "react";

export default function ClientPosts() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.slice(0, 5));
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading client posts...</p>;

    return (
        <div>
            <h3>Posts (Client Fetch)</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
