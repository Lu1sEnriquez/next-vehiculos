import Link from "next/link"

function Navbar() {
  return (
    <nav className={` bg-slate-400 flex md:justify-between lg:justify-between justify-around top-0 mb-4 items-center md:px-10    py-3 text-black  fixed  w-full  font-medium`}>
        <Link href={`/`}>
        Home
        </Link>
        <ul>
            <li>
                <Link href={'/salida'}>
                    salidas
                </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link href={'/about'}>
                    about
                </Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar