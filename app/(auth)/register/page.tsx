import Link from "next/link";

export default function Register() {
    return (
        <div className="flex justify-center items-center h-full w-full">

            <div
                className="bg-linear-to-b from-emerald-900 to-emerald-600 border border-white/20 backdrop-blur-xl opacity-80  rounded-2xl flex justify-center items-center flex-col shadow-2xl  max-w-1/2 min-h-fit bg-black  p-10">

                <div>
                    <h1>Create New Account</h1>
                </div>
                <form className={"flex flex-col justify-center items-center"}>

                    <input required={true} type={"text"} placeholder={"First Name"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5 "/>
                    <input required={true} type={"text"} placeholder={"Last Name"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5  "/>
                    <input required={true} type={"email"} placeholder={"Email"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5 "/>
                    <input required={true} type={"number"} placeholder={"Phone"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5 "/>
                    <input required={true} type={"password"} placeholder={"Password"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5 "/>
                    <input required={true} type={"date"} placeholder={"dob"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5 "/>
                    <input required={true} type={"number"} placeholder={"Gender Id"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5 "/>
                    <input required={true} type={"text"} placeholder={"Username"}
                           className="h-10 w-full px-2 bg-white font-semibold text-green-900 rounded-xl mt-3.5 "/>
                    <button className="h-10 w-4/5 bg-green-950 text-white font-bold rounded-xl hover:bg-black/20 transition-colors mt-2">
                        <Link href={"/login"}>Submit</Link>
                    </button>
                </form>

            </div>

        </div>
    );
}
