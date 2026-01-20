export default async function CachedPostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache',
    })

    const posts = await res.json()

    return (
        <div>
            <h1>Cached Posts (force-cache)</h1>
            <ul>
                {posts.slice(0, 5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
