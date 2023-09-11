import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <main className="w-[100vw] min-w-[100vw]">
            <nav className="flex flex-row justify-evenly items-center">
                <section className="w-[33%] text-center m-auto">
                    <Image src="/logo.png" alt="ChessNews Logo" title="Go to Homepage" width={50} height={50} />
                </section>
                <section className="w-[33%] text-center m-auto">
                    <ul className="p-2 inline-flex gap-5">
                        <Link href="/posts">
                            <Image src="/icons/003-ajedrez-1.png" alt="King icon" width={20} height={20} className="m-auto" />
                            <li>Posts</li>
                        </Link>
                        <Link href="/tools">
                            <Image src="/icons/001-pieza-de-ajedrez.png" alt="Queen icon" width={20} height={20} className="m-auto" />
                            <li>Tools</li>
                        </Link>
                        <Link href="/users">
                            <Image src="/icons/002-ajedrez.png" alt="Rook icon" width={20} height={20} className="m-auto" />
                            <li>Community</li>
                        </Link>
                    </ul>
                </section>
                <section className="w-[33%] m-auto">
                    <div className="flex flex-col gap-3 justify-center">
                        <Link href="/login">
                            <Image src="/icons/003-privacidad.png" alt="Login icon" title="Login" width={50} height={50} />
                        </Link>
                        <Link href="/logout">
                            <Image src="/icons/002-cerrar-sesin.png" alt="Logout icon" title="Logout" width={50} height={50} />
                        </Link>
                        <Link href="/profile">
                            <Image src="/icons/004-usuario.png" alt="Profile icon" title="Profile" width={50} height={50} />
                        </Link>
                        <Link href="/settings">
                            <Image src="/icons/001-configuraciones.png" alt="Settings icon" title="Settings" width={50} height={50} />
                        </Link>
                    </div>
                </section>
            </nav>
        </main>
    )
}