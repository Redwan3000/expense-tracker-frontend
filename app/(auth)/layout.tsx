import type {Metadata} from "next";
import "../globals.css";


export const metadata: Metadata = {
    title: "Expense Tracker",
    description: "Created by Hred",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-center items-center h-screen w-screen  bg-white p-20">
            <div className={"flex h-full justify-center items-center w-[90%] bg-[#F2F2F2] rounded-sm"}>
                {children}
            </div>
        </div>

    );
}
