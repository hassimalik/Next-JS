import React from "react";

type Post = { id : number; title: string }

export const CachedPosts = React.memo(async function CachedPosts(){
    const res = await fetch("https://dummyjson.com/posts",{
        next:{ revalidate: 10 }
    })
    const posts : Post[] = (await res.json()).posts 

    return (
        <ul>
            { posts.slice(0, 5).map(post=>(
                <li key={post.id}>{post.title}</li>
            )) }
        </ul>
    )
})