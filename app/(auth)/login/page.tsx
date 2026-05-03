import Link from "next/link";
import Image from "next/image";

export default function Login() {
    return (
        <div className="h-full w-full flex justify-center items-center bg-linear-to-b from-emerald-50 to-white">

            <div
                className="min-h-fit max-w-1/2 bg-linear-to-b from-emerald-900 to-emerald-600 border border-white/20 backdrop-blur-xl opacity-80  rounded-2xl flex justify-center items-center flex-col shadow-2xl ">


                    <div className="text-center mb-8 text-white w-4/5 mt-10">
                        <h1 className="text-3xl mb-2 font-extrabold">Welcome Back!</h1>
                        <p className="text-emerald-100 text-sm">Sign in to access your dashboard and continue tracking
                            your
                            expense,,</p>
                    </div>


                    <form className="w-full flex flex-col items-center gap-4 ">

                        <input type="text" placeholder="   Username"
                               className="bg-white rounded-xl text-green-700 font-semibold  h-12 w-4/5 px-4 outline-none  "/>
                        <input type="password" placeholder="   Password"
                               className="bg-white rounded-xl text-green-700 font-semibold  h-12 w-4/5 px-4 outline-none "/>

                        <Link href="" className="text-sm text-emerald-100 hover:underline pl-60">Forget
                            password?</Link>

                        <button
                            className="bg-green-950 text-white font-bold h-12 w-4/5 rounded-xl hover:bg-black/20 transition-colors"><Link href={"/dashboard"}>Login</Link>
                        </button>

                    </form>


                    <p className="mt-1 mb-1 pb-1">...........Or Sign In With...........</p>

                    <div className="flex justify-around  w-4/5 mb-3 ">
                        <button
                            className="bg-linear-to-b from-emerald-50 to-white border rounded-sm  flex justify-center items-center h-10 w-20">
                            <Image
                                src="/google_logo.png"
                                alt="Google logo"
                                width={60}
                                height={60}
                            />

                        </button>
                        <button
                            className="bg-linear-to-b from-emerald-50 to-white border rounded-sm flex justify-center items-center h-10 w-20 hover:bg-emerald-500">
                            <Image
                                src="/f_logo.png"
                                alt="facebook logo"
                                width={40}
                                height={40}
                            />
                        </button>

                        <button
                            className="bg-linear-to-b from-emerald-50 to-white border rounded-sm flex justify-center items-center h-10 w-20 hover:bg-emerald-500">
                            <Image
                                src="/apple_logo.png"
                                alt="apple logo"
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>

                    <p className={"mb-3"}>Dont have and Account? <Link href="/register"
                                                                       className="text-sm  hover:text-emerald-100 hover:underline self-end">Register</Link>
                    </p>
                </div>

            </div>



    );
}
