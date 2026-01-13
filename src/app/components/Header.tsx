import Link from "next/link"
export default function Header(){
    return(
        <header className='p-4 mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-lg shadow-lg'>
                <h1 className='text-3xl font-bold mb-2 text-white'>Teams Section</h1>
                <nav className='flex space-x-4 '>
                    <Link className=' p-1 rounded-xl  transition-all  transform hover:scale-120 hover:bg-[#672208] ' href="/">Home</Link>{" "}
                    <Link className=' p-1 rounded-xl  transition-all  transform hover:scale-120 hover:bg-[#220651]' href="/teams/Quetta">Quetta</Link>{" "}
                    <Link className=' p-1 rounded-xl  transition-all  transform hover:scale-120 hover:bg-[#ead811]' href="/teams/Peshawar">Peshawar</Link>{" "}
                    <Link className=' p-1 rounded-xl  transition-all  transform hover:scale-120 hover:bg-[#074243]' href="/teams/Multan">Multan</Link>{" "}
                    <Link className=' p-1 rounded-xl  transition-all  transform hover:scale-120 hover:bg-[#0e1c7a]' href="/teams/Karachi">Karachi</Link>{" "}
                    <Link className=' p-1 rounded-xl  transition-all  transform hover:scale-120 hover:bg-[#e08b16]' href="/teams/Islamabad">Islamabad</Link>{" "}
                </nav>
            </header>
    )
}