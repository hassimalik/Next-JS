import React from 'react'
const page = () => {
  return (
    <div>
      <h1 className='text-4xl mt-4 font-mono text-center text-[#c6f12d]'>Hello Hassaan!</h1>
      <div className='mt-8 ml-4 flex gap-4 flex-col'>
      <p>So today we are using Next JS </p>
      <h1 className='text-2xl text-[#61d5e7]'>Now we are creating Routes to check how it actually works.</h1>
      <h1 className='text-2xl text-[crimson]'>Now I am creating a folders to create routes.</h1>
      So today i will discuss about the hooks of next js
      These are :
      <ol className= 'text-red-400 flex flex-col gap-4'>
        <li>useParams</li>
        <p className='text-white'>Use params is a hook which is used to view params like in which id in which params we are present  that are dynamic routes</p>
        <li>useRouter</li>
        <p className='text-white'>Use Router is a hook that is used to give dynamic routes</p>
        <li>useSearchParams</li>
        <li>usePathname</li>
        <p className='text-white'>Use Path name is a hook that is used to find and use the exact path at which it is present.</p>
        <li>useEffect</li>
        <p className='text-white'>Use effect is a hook that it is of both react and next. Use effect is a hook that is used to render apis or something that we want to do one time before our page loads so that we can get the results already before the landing page.</p>
        <li>useState</li>
        <p className='text-white'>Use state is a hook that is used to save a state or to change a state. For example the most common example is that of counter a button to increase the counting value . It is because of the useState.</p>
        <li>useContext</li>
        <p className='text-white'>Use context is a hook that is used to use context of a custom/context api.</p>
      </ol>
      <br />
      <hr />
      <br />
      </div>
    </div>
  )
}
export default page
