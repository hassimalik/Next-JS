import React from 'react'
const page = () => {
  return (
    <div>
      <h1 className='text-4xl mt-4 font-mono text-center text-[#c6f12d]'>Hello Hassaan!</h1>
      <div className='mt-8 ml-4'>
      <p>So today we are using Next JS </p>
      <h1 className='text-2xl text-[#61d5e7]'>Now we are creating Routes to check how it actually works.</h1>
      <h1 className='text-2xl text-[crimson]'>Now I am creating a folders to create routes.</h1>
      So today i will discuss about the hooks of next js
      These are :
      <ol className='text-red-400'>
        <li>useParams</li>
        <li>useRouter</li>
        <li>useSearchParams</li>
        <li>usePathname</li>
        <li>useEffect</li>
        <li>useState</li>
      </ol>
      <br />
      <hr />
      <br />
      <div className='mt-4'>
        <h1 className='text-center text-2xl text-[#a39104]'>CSR vs SSR</h1>
        <h2>CSR means Client Side Rendering.</h2>
        <h2>Client Side means that it is on browser side only or it is </h2>
      </div>
      </div>
    </div>
  )
}
export default page
