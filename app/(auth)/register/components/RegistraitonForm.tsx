"use client"


import {useState} from "react";
import {OpenEye} from "@/components/OpenEye";
import {ClosedEye} from "@/components/ClosedEye";
import {toast} from "sonner";
import Link from "next/link";
import registrationHandler from "../registrationHandler";
import {useRouter} from "next/navigation";


export default function RegistraitonForm() {
const router = useRouter();
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
           
            const reg= await registrationHandler(
                regForm.password,
                regForm.confirmPassword,
                regForm.firstName,
                regForm.lastName,
                regForm.email,
                regForm.phone,
                regForm.dob,
                Number(regForm.genderId),
                regForm.username
            );
                
            if (reg === "password did not match") {
                toast.error("Password did not match");
                return;
            }else if (reg === "Registration successful") {
                toast.success("Registration successful");
                setTimeout(() => {
                router.push("/login");
                }, 1500)

            } else {
                toast.error("Registration failed");
            }

            
        };
    

    
  return (
    <div>

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
  )
}
