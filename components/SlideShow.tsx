"use client"

import React from 'react'
import {useState, useEffect} from "react";
import Image from "next/image";

const imageList = [
    "/slideshow/login_1.png",
    "/slideshow/login2.png",
    "/slideshow/login3.png",
    "/slideshow/login4.png"
]


export const SlideShow = () => {

    const [i, setI] = useState(0);

    useEffect(() => {

        const slideTimer = setTimeout(() => {
            {
                (i == imageList.length - 1) ? setI(0) : setI(i + 1)
            }
        }, 4000);


        return ()=>{ clearTimeout(slideTimer)};
    }, [i]);


    return (
        <div>
            <Image src={`${imageList[i]}`} alt={"sign in side image"} className={"animate-pulse "}
                   height={450} width={450}></Image>
        </div>
    )

}
