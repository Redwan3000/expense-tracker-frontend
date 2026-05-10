"use client"
import Link from "next/link";
import {SlideShow} from "@/components/SlideShow";
import {useState} from "react";
import {OpenEye} from "@/components/OpenEye";
import {ClosedEye} from "@/components/ClosedEye";
import {toast} from "sonner";

export default function Register() {

    const [eyeicon, setEyeIcon] = useState(false);
    const [regForm, setRegForm] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            username: "",
            dob: "",
            genderId: "",
            password: "",
            confirmPassword: "",

        }
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (regForm.password !== regForm.confirmPassword) {
            toast.error("passowrd did not match");
            return;
        }
        try {
            const res = await fetch("http://localhost:8080/users-register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    firstName: regForm.firstName,
                    lastName: regForm.lastName,
                    email: regForm.email,
                    phone: regForm.phone,
                    username: regForm.username,
                    dob: regForm.dob,
                    genderId: Number(regForm.genderId),
                    password: regForm.password,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error("Registration failed");
                return;
            }

            toast.success("User Registered")
            setTimeout(() => {
                window.location.href = "/login";
            }, 1500)

        } catch (error) {
            toast.error("server not reached !!! ")
        }
    };


    return (
        <div
            className={"h-full w-full bg-[#DBD9BC]  rounded-sm shadow-sm backdrop-blur-md border-2 border-white/70 flex overflow-hidden"}>


            <div className={"h-full w-1/2 flex justify-center items-center flex-col"}>
                <SlideShow/>
                <h1 className={"text-[#33450E] font-extrabold font-serif text-[40px]"}>Haltrack</h1>
                <h1 className={"text-[#BB9668] font-extrabold font-serif "}>Your Money Our Responsibility</h1>
            </div>

            <div className={"h-full w-1/2 justify-center items-center bg-[#F2f2f2] rounded-sm rounded-l-xl flex "}>

                <form className={"bg-[#DBD9BC]  p-4 w-1/2 flex flex-col justify-center rounded-xl"}
                      onSubmit={handleSubmit}>
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
                            <input type={"test"}
                                   name={"firstName"}
                                   value={regForm.firstName}
                                   onChange={(e) => {
                                       setRegForm({...regForm, firstName: e.target.value})
                                   }}
                                   required={true}
                                   placeholder={"First Name"}
                                   className={" w-full reg-input-box "}/>
                        </div>

                        <div>
                            <label className={" ml-1 text-[14px] font-medium"}>Last Name</label>
                            <input type={"test"}
                                   name={"lastName"}
                                   value={regForm.lastName}
                                   required={true}
                                   placeholder={"Last Name"}
                                   onChange={(e) => {
                                       setRegForm({...regForm, lastName: e.target.value})
                                   }}
                                   className={"w-full reg-input-box "}/>
                        </div>

                    </div>


                    <div className={"mb-4 w-full  flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Email</label>
                        <input type={"email"}
                               name={"email"}
                               value={regForm.email}
                               required={true}
                               placeholder={"Email Address"}
                               onChange={(e) => {
                                   setRegForm({...regForm, email: e.target.value})
                               }}
                               className={" w-full reg-input-box "}/>
                    </div>

                    <div className={"mb-4 w-full  flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Phone Number</label>
                        <input name={"phone"}
                               type={"tel"}
                               value={regForm.phone}
                               required={true}
                               placeholder={"Phone"}
                               onChange={(e) => {
                                   setRegForm({...regForm, phone: e.target.value})
                               }}
                               className={" w-full reg-input-box "}/>
                    </div>

                    <div className={"mb-4 w-full  flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Username</label>
                        <input type={"text"}
                               name={"username"}
                               value={regForm.username}
                               required={true}
                               placeholder={"Username"}
                               onChange={(e) => {
                                   setRegForm({...regForm, username: e.target.value})
                               }}
                               className={" w-full reg-input-box "}/>
                    </div>


                    <div className={"  mb-4 w-full flex justify-center   h-10 text-[#33450E]  gap-4"}>

                        <div>
                            <label className={" ml-1 text-[14px] font-medium"}>Date-of-Birth</label>
                            <input type={"date"}
                                   name={"dob"}
                                   value={regForm.dob}
                                   required={true}
                                   placeholder={"Date-of-Birth"}
                                   onChange={(e) => {
                                       setRegForm({...regForm, dob: e.target.value})
                                   }}
                                   className={" w-full reg-input-box "}/>
                        </div>

                        <div>
                            <label className={" ml-1 text-[14px] font-medium"}>Gender</label>

                            <select required={true}
                                    value={regForm.genderId}
                                    name={"genderId"}
                                    onChange={(e) => {
                                        setRegForm({...regForm, genderId: e.target.value})
                                    }}
                                    className={"w-full p-0.5 reg-input-box"}>
                                <option value="">Select Gender</option>
                                <option value={1}>Male</option>
                                <option value={2}>Female</option>
                            </select>

                        </div>

                    </div>

                    <div className={"mb-4 w-full relative flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Password</label>
                        <input name={"password"}
                               value={regForm.password}
                               type={`${eyeicon ? "text" : "password"}`}
                               required={true}
                               placeholder={"Password"}

                               onChange={(e) => {
                                   setRegForm({...regForm, password: e.target.value})
                               }}
                               className={" w-full reg-input-box "}/>

                        <div className={"size-4 absolute left-[90%] top-13.5 "} onClick={() => {
                            setEyeIcon(!eyeicon)
                        }}>{eyeicon ? <OpenEye/> : <ClosedEye/>}
                        </div>
                    </div>

                    <div className={"mb-4 w-full relative flex flex-col h-10 text-[#33450E]"}>
                        <label className={" ml-1 text-[14px] font-medium"}>Confirm Password</label>
                        <input name={"confirmPassword"}
                               value={regForm.confirmPassword}
                               type={`${eyeicon ? "text" : "password"}`}
                               required={true}
                               onChange={(e) => {
                                   setRegForm({...regForm, confirmPassword: e.target.value})
                               }}
                               placeholder={"Confirm Password"}
                               className={" w-full reg-input-box "}/>


                        <div className={"size-4 absolute left-[90%] top-13.5"} onClick={() => {
                            setEyeIcon(!eyeicon)
                        }}>{eyeicon ? <OpenEye/> : <ClosedEye/>}
                        </div>
                    </div>


                    <button type={"submit"}
                            className={"bg-[#33450E]/50 mt-2 flex justify-center p-2.5  font-extrabold rounded-xl w-full mb-3  text-[#33450E]  border-2 border-white/60 hover:animate-pulse hover:shadow-md hover:shadow-[#33450E] hover:-translate-y-1"}>
                        Submit
                    </button>


                </form>

            </div>

        </div>
    );
}
