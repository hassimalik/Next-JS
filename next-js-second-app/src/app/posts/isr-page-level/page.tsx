type Post = { id: number; title: string }

export default async function ISRPageLevel() {
    const res = await fetch("https://dummyjson.com/posts", {
        next: { revalidate: 10 }    // 10 seconds cache
    })
    const posts: Post[] = (await res.json()).posts
    return (
        <div>
            <h1>Page-Level ISR</h1>
            <ul>{posts.slice(0, 5).map(post=>(
                <li key={post.id}>{post.title}</li>
            ))}</ul>
        </div>
    )
}