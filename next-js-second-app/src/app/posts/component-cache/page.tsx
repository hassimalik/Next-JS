import { CachedPosts } from "@/app/components/CachedPosts";

export default function ComponentCachePage(){
    return(
        <div>
            <h1>Component-Level Cache</h1>
            <CachedPosts/>
        </div>
    )
}