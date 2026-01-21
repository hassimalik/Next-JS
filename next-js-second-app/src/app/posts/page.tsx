type Post = { id: number; title: string }

export default async function PostsPage(){
    try{
        const res = await fetch("https://dummyjson.com/posts")
        if(!res.ok) throw new Error("Failed to fetch posts")
            const data : {posts : Post[]} = await res.json()
        return(
            <ul>
                {
                    data.posts.slice(0, 5).map(post=>(
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        )
    } catch(error:any){
        return <p>Error loading posts</p>
    }
}