"use client"
import Link from "next/link";
import {SlideShow} from "@/components/SlideShow";
import {useState} from "react";
import {OpenEye} from "@/components/OpenEye";
import {ClosedEye} from "@/components/ClosedEye";

export default function Register() {

    const [eyeicon, setEyeIcon] = useState(false);
    return (
        <div
            className={"h-full w-full bg-[#DBD9BC]  rounded-sm shadow-sm backdrop-blur-md border-2 border-white/70 flex overflow-hidden"}>


            <div className={"h-full w-1/2 flex justify-center items-center flex-col"}>
                <SlideShow/>
                <h1 className={"text-[#33450E] font-extrabold font-serif text-[40px]"}>Haltrack</h1>
                <h1 className={"text-[#BB9668] font-extrabold font-serif "}>Your Money Our Responsibility</h1>
            </div>

            <div className={"h-full w-1/2 justify-center items-center bg-[#F2f2f2] rounded-sm rounded-l-xl flex "}>

                <form className={"bg-[#DBD9BC]  p-4 w-1/2 flex flex-col justify-center rounded-xl"}>
                    <div
                        className={"text-[#BB9668] hover:text-[#33450E] hover:underline justify-end self-end items-end flex w-full p-1 mb-5 text-[16px] font-serif hover:font-semibold"}>
                        <Link href={"/login"}
                        >Sign-In</Link>
                    </div>

                    <div
                        className={"text-[#33450E] w-full flex justify-center font-extrabold font-serif text-[35px] mb-10"}>Register
                    </div>


                    <div className={"  mb-4 w-full flex justify-center   h-10 text-[#33450E]  gap-4"}>

                        <div>
                            <label className={" ml-1 text-[14px] font-medium"}>First Name</label>
                            <input type={"test"} required={true} placeholder={"First Name"}
                                   className={" w-full reg-input-box "}/>
                        </div>

                        <div>
                            <label className={" ml-1 text-[14px] font-medium"}>Last Name</label>
                            <input type={"test"} required={true} placeholder={"Last Name"}
                                   className={"w-full reg-input-box "}/>
                        </div>

                    </div>


                    <div className={"mb-4 w-full  flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Email</label>
                        <input type={"email"} required={true} placeholder={"Email Address"}
                               className={" w-full reg-input-box "}/>
                    </div>

                    <div className={"mb-4 w-full  flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Phone Number</label>
                        <input type={"tel"} required={true} placeholder={"Phone Number"}
                               className={" w-full reg-input-box "}/>
                    </div>

                    <div className={"mb-4 w-full  flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Username</label>
                        <input type={"text"} required={true} placeholder={"Username"}
                               className={" w-full reg-input-box "}/>
                    </div>


                    <div className={"  mb-4 w-full flex justify-center   h-10 text-[#33450E]  gap-4"}>

                        <div>
                            <label className={" ml-1 text-[14px] font-medium"}>Date-of-Birth</label>
                            <input type={"date"} required={true} placeholder={"Date-of-Birth"}
                                   className={" w-full reg-input-box "}/>
                        </div>

                        <div>
                            <label className={" ml-1 text-[14px] font-medium"}>Gender</label>

                            <select required={true} className={"w-full p-0.5 reg-input-box"}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                        </div>

                    </div>

                    <div className={"mb-4 w-full relative flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Password</label>
                        <input type={`${eyeicon ? "text" : "password"}`} required={true} placeholder={"Password"}
                               className={" w-full reg-input-box "}/>

                        <div className={"size-4 absolute left-[90%] top-13.5 "} onClick={() => {
                            setEyeIcon(!eyeicon)
                        }}>{eyeicon ? <OpenEye/> : <ClosedEye/>}
                        </div>
                    </div>

                    <div className={"mb-4 w-full relative flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Confirm Password</label>
                        <input type={`${eyeicon ? "text" : "password"}`} required={true}
                               placeholder={"Confirm Password"}
                               className={" w-full reg-input-box "}/>


                        <div className={"size-4 absolute left-[90%] top-13.5"} onClick={() => {
                            setEyeIcon(!eyeicon)
                        }}>{eyeicon ? <OpenEye/> : <ClosedEye/>}
                        </div>
                    </div>

                    <Link href={"/login"}
                          className={"bg-[#33450E]/50 mt-2 flex justify-center p-2.5  font-extrabold rounded-xl w-full mb-3  text-[#33450E]  border-2 border-white/60 hover:animate-pulse hover:shadow-md hover:shadow-[#33450E] hover:-translate-y-1"}>

                        Login</Link>


                </form>

            </div>

        </div>
    );
}
