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
        <div className="flex justify-center items-center h-screen w-screen  bg-white">
       
                {children}
           
        </div>

    );
}
