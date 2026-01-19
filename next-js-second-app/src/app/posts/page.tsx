import ClientPosts from "./clientPosts";

async function getPosts() {
    const res = await fetch("https://jsonplaceholder/typicode.com/posts", {
        next: { revalidate: 60 }
    })
    return res.json();
}

export default async function PostsPage() {
    const posts = await getPosts();
    return (
        <div>
            <h1>Posts (Server Fetch)</h1>
            <ul>
                {posts.slice(0, 5).map((post: any) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                    </li>
                ))}
            </ul>
            <hr />
            <ClientPosts />
        </div>
    );
}