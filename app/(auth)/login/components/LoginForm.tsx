"use client"

import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import {OpenEye} from "@/components/OpenEye";
import {ClosedEye} from "@/components/ClosedEye";
import {useRouter} from "next/navigation";
import {toast} from "sonner";
import loginHandler from "../loginHandler";



export default function LoginForm() {

    const router = useRouter();
    const [eyeicon, setEyeIcon] = useState(false);
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    })


 const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        const loginResult = await loginHandler(loginForm.username, loginForm.password);

        if (loginResult !== null || loginResult !== undefined) {
            localStorage.setItem("userDetails", JSON.stringify(loginResult));
            toast.success("Logged in Successfully ,, Welcome Back"+ loginResult.username);
            router.push("/dashboard");
        } else {
            toast.error("Login failed")
        }
    };
        


    return (
    <div>

<form onSubmit={handleSubmit}>

                            <div className={"w-full relative text-[#BB9668] hover:text-[#33450E] "}>

                                <input type={"text"}
                                       placeholder="username"
                                       name={"username"}
                                       value={loginForm.username}
                                       onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                                       className={"bg-[#F2f2f2] p-2.5 rounded-xl w-full mb-3  text-[#BB9668] pl-8 border-2 border-white/60 hover:text-[#33450E]"}/>

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-5 absolute top-3 left-2">
                                    <path fillRule="evenodd"
                                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                          clipRule="evenodd"/>
                                </svg>

                            </div>


                            <div className={"w-full relative text-[#BB9668] hover:text-[#33450E]"}>
                                <input type={`${eyeicon ? "text" : "password"}`}
                                       placeholder={"password"}
                                       value={loginForm.password}
                                       onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                                       className={"bg-[#F2f2f2]  p-2.5 rounded-xl w-full mb-2 text-[#BB9668] pl-8 border-2 border-white/60 hover:text-[#33450E]"}/>

                                {/*lock*/}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="size-5 absolute top-3 left-2">
                                    <path fillRule="evenodd"
                                          d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                                          clipRule="evenodd"/>
                                </svg>

                                <div className={"size-4 absolute left-[87%] bottom-0"} onClick={() => {
                                    setEyeIcon(!eyeicon)
                                }}>{eyeicon ? <OpenEye/> : <ClosedEye/>}
                                </div>

                            </div>


                            <Link href={"/dashboard"}
                                  className={"flex justify-end mb-2 text-[#BB9668] text-[14px] underline hover:text-[#33450E]"}>Forgot
                                Password?</Link>


                            <button type={"submit"}
                                    className={"bg-[#33450E] flex justify-center p-2.5  font-extrabold rounded-xl w-full mb-3  text-[#BB9668]  border-2 border-white/60 hover:animate-pulse hover:shadow-md hover:shadow-[#33450E] hover:-translate-y-1"}>
                                Login

                            </button>

                            <p className={"w-full flex justify-center  text-[#BB9668] "}>-------------------------Or-------------------------</p>


                            <Link href={"/google"}>
                                <div
                                    className={"bg-[#F2f2f2] mt-3 hover:shadow-md hover:shadow-[#BB9668] flex overflow-hidden h-10 items-center rounded-3xl w-full mb-3  text-[#BB9668] border-2 border-white/60 hover:text-[#33450E]"}>
                                    <Image src={"/google_logo.png"} alt={"google logo"} height={50} width={50}/> <p
                                    className={"pl-11 text-[15px]"}>Continue With Google</p>
                                </div>
                            </Link>


                            <Link href={"/facebook"}>
                                <div
                                    className={"bg-[#F2f2f2] hover:shadow-md hover:shadow-[#BB9668] mt-3 p-1 flex items-center overflow-hidden h-10 rounded-3xl w-full mb-3 pl-3.5 text-[#BB9668] border-2 border-white/60 hover:text-[#33450E]"}>
                                    <Image src={"/facebook_logo.png"} alt={"google logo"} height={25} width={25}/> <p
                                    className={"pl-13 text-[15px]"}>Continue With Facebook</p>
                                </div>
                            </Link>

                        </form>

    </div>
  )
}
