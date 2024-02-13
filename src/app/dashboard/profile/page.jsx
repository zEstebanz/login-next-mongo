"use client";

import { useSession, signOut } from "next-auth/react";

function DashboardPage() {
    const { data: session, status } = useSession();

    return (
        <section className="min-h-screen h-auto bg-[#050505] pt-[100px]">
            <h1 className="text-[#0A715B] text-center text-3xl mb-8 font-bold pt-10">PERFIL</h1>

            <div className="text-white flex flex-col items-center lg:h-[calc(100vh-4rem)] gap-y-5 p-4">

                {status === "authenticated" ? (
                    <div className="flex items-center justify-center">
                        <div className="bg-black shadow-lg rounded-lg p-4 max-w-sm mx-auto text-center">
                            <h2 className="text-xl font-semibold">Name: {session.user.fullname}</h2>
                            <h2 className="text-xl font-semibold">Email: {session.user.email}</h2>
                            <button className="buttonCustom2 block py-2 pl-3 pr-4 text-white rounded rounded-lg mx-auto block mt-5 bg-[#0A715B]" onClick={() => { signOut(); }}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>Not authenticated</p>
                )}
            </div>
        </section>
    );
}

export default DashboardPage;