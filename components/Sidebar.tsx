import React from 'react'
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
    return (


        <div
            className="min-h-full w-1/6 p-3 bg-linear-to-b from-indigo-400/70 to-blue-200/50 backdrop-blur-md border-r border-white/40 flex  flex-col justify-center items-center rounded-xl">


            <div className={"flex justify-start items-center mb-10 border-b-2  min-w-full border-white/60  "}>
                <Image src={"/sidebarIcons/main_logo.png"} width={100} height={100} alt={"main logo"}></Image> <h1 className={"text-black font-extrabold font-serif text-[36px] text-emerald-950"}>Haltrack</h1>
            </div>

            <div className={"flex flex-col items-center  min-h-4/5 min-w-full justify-between"}>
                

                <div className={"flex flex-col justify-center items-center   mb-10 min-w-full "}>
                    <Link href={"/dashboard"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/dashboard.svg"} width={18} height={18}
                        alt={"dashboard icon"}></Image> Dashboard
                    </Link>
                    <Link href={"/owners"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/users.svg"} width={18} height={18} alt={"owners icon"}></Image> Owners
                    </Link>
                    <Link href={"/subowners"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/users.svg"} width={18} height={18} alt={"subowner icon"}></Image> Subowners
                    </Link>
                    <Link href={"/permissions"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/permission.svg"} width={18} height={18}
                        alt={"dashboard icon"}></Image> Permissions
                    </Link>
                    <Link href={"/transactions"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/transactions.svg"} width={18} height={18}
                        alt={"dashboard icon"}></Image> Transactions
                    </Link>
                    <Link href={"/accounts"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/accounts.svg"} width={18} height={18}
                        alt={"dashboard icon"}></Image> Accounts
                    </Link>
                    <Link href={"/reports"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/reports.svg"} width={18} height={18} alt={"reports icon"}></Image> Reports
                    </Link>
                    <Link href={"/subscribers"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/subscribers.svg"} width={25} height={25}
                        alt={"subscriber icon"}></Image> Subscribers
                    </Link>
                </div>

                <div className={"flex flex-col justify-center items-center   mb-10 min-w-full "}>
                    <Link href={"/profile"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/profile.svg"} width={18} height={18} alt={"dashboard icon"}></Image> My
                        Profile
                    </Link>
                    <Link href={"/settings"} className={"sidebar-button"}> <Image
                        src={"/sidebarIcons/settings.svg"} width={18} height={18}
                        alt={"settings icon"}></Image> Settings
                    </Link>

                </div>


                <Link href={"/login"} className={"bg-indigo-200/60 text-[18px] text-black  flex  border border-white/60 p-1 rounded-sm w-full backdrop-blur-md transition-all  duration-100 ease-in-out shadow-sm\n" +
                    "    hover:-translate-x-1 hover:bg-red-600/60  hover:border-white  hover:shadow-xl  hover:shadow-red-500/20 justify-center items-center hover:animate-bounce"}>
                    Logout
                </Link>
            </div>


        </div>
    )
}
