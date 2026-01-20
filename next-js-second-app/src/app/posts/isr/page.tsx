type Post = {
    id: number
    title: string
    body: string
}

export default async function ISRPostsPage() {
    const res = await fetch("https://dummyjson.com/posts", {
        next: { revalidate: 10 },
    })
    const postsData = await res.json()
    const posts = Array.isArray(postsData.posts) ? postsData.posts : []
    return (
        <div>
            <h1>ISR Posts(revalidate 10s)</h1>
            <ul>
                {
                    posts.slice(0, 5).map(post => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
