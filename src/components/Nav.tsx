import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';

async function Nav() {

    const session = await getServerSession()
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-white text-2xl font-bold">Mi Sitio</Link>
                    <ul className="flex space-x-4">

                        <li>
                            <Link href="/" className="text-white">Home
                            </Link>
                        </li>

                        {
                            session ? (
                                <>
                                    <li>
                                        <Link href="/blog" className="text-white">Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/dashboard/profile" className="text-white">Profile
                                        </Link>
                                    </li>
                                </>

                            ) : (
                                <>
                                    <li>
                                        <Link href="/login" className="text-white">Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/register" className="text-white">Register
                                        </Link>
                                    </li>

                                </>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
