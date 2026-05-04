import React from 'react'
import Link from "next/link";

export const UsersSubMenu = () => {
    return (
        <div> <Link href={"/owners"} className={" ml-6 sidebar-button"}>

            <h3 className={"pl-3"}> Owners</h3>
        </Link>
            <Link href={"/subowners"} className={"ml-6 sidebar-button"}>

                <h3 className={"pl-3"}>Subowners</h3>
            </Link>

            <Link href={"/subscribers"} className={"ml-6 sidebar-button"}>

                <h3 className={"pl-3"}>Subscribers</h3>
            </Link>
        </div>
    )
}
