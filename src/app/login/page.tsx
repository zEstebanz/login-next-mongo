"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const res = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });

        if (res?.error) return setError(res.error as string);
        if (res?.ok) return router.push("/dashboard/profile");

        console.log(res);

    };

    return (
        <section className="section-form">
            <div className="flex justify-center items-center form-login">
                <form onSubmit={handleSubmit} className="bg-neutral-950 px-4 py-6 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/3">
                    {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-7 text-white">SignIn</h1>

                    <label className="text-slate-300">Email:</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-zinc-400 px-2 py-1 block w-full mb-2"
                        name="email"
                    />

                    <label className="text-slate-300">Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-zinc-400 px-2 py-1 block w-full mb-4"
                        name="password"
                    />
                    <Link href={"/register"} className="text-[#0A715B]">Registrarse</Link>

                    <button className="bg-[#0A715B] text-white px-2 py-1 block w-full mt-4">
                        Login
                    </button>
                </form>
            </div>
        </section>


    );
}

export default Login;