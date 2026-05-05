export default function Accounts() {
    return (
        <main className={"h-full flex flex-col w-full"}>
            <div className={"min-w-full w-full h-18 mb-3 p-3 flex justify-start bg-[#DEDDCB] rounded-3xl"} >

                <div className={" w-3/12  relative hover:text-[#33450E] text-[#BB9668]"}>
                <input placeholder={"search Account"} className={"h-12 w-full pl-12 bg-[#F2f2f2] pr-6 rounded-4xl border-2  border-white/60 shadow-md backdrop-blur-sm "}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 absolute  bottom-3 left-3 ">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </div>



            </div>
            <div className={"flex-1 h-full w-full bg-[#F2F2F2] rounded-xl"}>

            </div>
        </main>

    );
}
