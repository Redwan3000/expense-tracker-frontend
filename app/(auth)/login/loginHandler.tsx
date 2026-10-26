
"use server"

import { toast } from 'sonner';
import {cookies} from 'next/headers';



export default async function loginHandle(username : string, password: string) {


try {
    
    const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            username: username,
            password: password,
        })
    });

    const dataJwt = await res.json();

    if (!res.ok) {
        toast.error(dataJwt.message ?? "Login failed")
        return
    }

    const cookieJwt = await cookies();

    cookieJwt.set({
        name: 'token',
        value: dataJwt.result,
        httpOnly: true,
        secure: true,
    });

    const res2 = await fetch("http://localhost:8080/user/user-info",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${cookieJwt.get('token')?.value}`
        }
    });
    const userData = await res2.json();

    if (!res2.ok) {
        toast.error(userData.message ?? "Failed to fetch user data")
        return
    }

    if(res.ok && res2.ok){
        return userData.result;
}
}

catch (error) {
    console.error("Error during login:", error);
}

}
