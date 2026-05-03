"use client"

import {useState, useEffect} from "react";
import Image from "next/image";


const slideShowImagesPath = [
    "/illustrations/family.svg",
    "/illustrations/money.svg",
    "/illustrations/planning.svg",
    "/illustrations/shopping.svg",
    "/illustrations/wallet.svg",
]


export function ImageSlider() {

    const [currentimage, setCurrentImage] = useState(0);

    const [visible, setVisible] = useState(true);

    useEffect(() => {

        const timer = setInterval(() => {


            setVisible(false);
            setTimeout(() => {
                setCurrentImage((index) =>
                    index === slideShowImagesPath.length - 1 ? 0 : index + 1
                )
                setVisible(true)
            }, 500)

        }, 9000)

        return () => clearInterval(timer)
    }, [])


    return (
        <div
            className="h-full w-full bg-linear-to-b from-emerald-900 to-emerald-600 flex justify-center items-center shadow-sm">

            <div
                className="h-3/4 w-3/4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl  justify-center items-center flex flex-col gap-10">

                <div className="flex items-center gap-2">
                    <Image
                        src="/sidebarIcons/main_logo.png"
                        alt="logo"
                        width={100}
                        height={100}

                    />
                    <p className="bg-linear-to-tl from-emerald-50 to-emerald-900 bg-clip-text text-transparent text-6xl font-extrabold font-serif">Expense Tracker
    </p>
                </div>

                <Image src={slideShowImagesPath[currentimage]} alt={"slide show images"} width={500} height={500}
                       className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}></Image>


            </div>

        </div>


    )

}