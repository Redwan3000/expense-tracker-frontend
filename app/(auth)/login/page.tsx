
import Link from "next/link";
import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Login() {


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



                            <LoginForm/>

                    </div>
                </div>
            </div>
        </div>
    );
}
