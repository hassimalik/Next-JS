type Post = {
    id:number
    title:string
    body:string
}

export default async function FreshPostsPage() {
    console.log("Fresh Posts fetch", new Date());
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store',
    })
    const posts:Post[] = await res.json();
    return (
        <div>
            Fresh Posts(no-store)
            <ul>
                {posts.slice(0,5).map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}