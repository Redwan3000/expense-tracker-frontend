"use client"

import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import {OpenEye} from "@/components/OpenEye";
import {ClosedEye} from "@/components/ClosedEye";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

export default function Login() {

    const router = useRouter();
    const [eyeicon, setEyeIcon] = useState(false);
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    username: loginForm.username,
                    password: loginForm.password,
                })
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message ?? "Login failed")
                return
            }

            localStorage.setItem("token", data.result.jwt);
            localStorage.setItem("userId", data.result.userId);

            toast.success("Logged in Successfully ,, Welcome Back")
            router.push("/dashboard");
        } catch (error) {
            toast.error("server not found")
        }

    };

    return (

        <div
            className={"h-full w-full bg-[#DBD9BC]  rounded-sm shadow-sm backdrop-blur-md border-2 border-white/70 flex overflow-hidden"}>

            <div className={"h-full w-1/2 flex justify-center items-center flex-col"}>
                <Image src={"/sidebarIcons/main_logo.png"} alt={"sign in side image"} className={"animate-pulse "}
                       height={450} width={450}></Image>
                <h1 className={"text-[#33450E] font-extrabold font-serif text-[40px]"}>Haltrack</h1>
                <h1 className={"text-[#BB9668] font-extrabold font-serif "}>Money is Honey</h1>
            </div>

            <div className={"h-full w-1/2 justify-center items-center bg-[#F2f2f2] rounded-sm rounded-l-xl flex "}>
                <div className={" flex flex-col justify-center items-center h-3/4 w-1/2  bg-[#DBD9BC] rounded-xl p-4"}>

                    <div className={" h-full w-full p-2 "}>

                        <div
                            className={"text-[#BB9668] hover:text-[#33450E] hover:underline justify-end self-end items-end flex w-full p-1 mb-5 text-[16px] font-serif hover:font-semibold"}>
                            <Link href={"/register"}
                            >Sign-Up</Link>
                        </div>

                        <div
                            className={"flex justify-center items-center font-extrabold text-[#33450E] font-serif text-[35px] mb-10"}>
                            Sign-In
                        </div>


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
                </div>
            </div>
        </div>
    );
}
