import type {Metadata} from "next";
import "../globals.css";
import {ImageSlider} from "@/components/AuthImageSlider";


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


        <div className="flex h-full bg-white">
            <div className="w-1/2">
                <ImageSlider/>
            </div>
            <div className="w-1/2">
                {children}
            </div>

        </div>


    );
}
