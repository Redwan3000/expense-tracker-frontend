"use client"


import React, {useState} from "react";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";





export const Testing = () => {

    const [regForm, setRegForm] = useState({

        name: "",
        role: "",
        address: "",
        phone: "",
        status: true

    })

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        try {
            const attemp = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({

                    name: regForm.name,
                    role: regForm.role,
                    address: regForm.address,
                    phone: regForm.phone,
                    status: regForm.status
                }),
            });

            if (!attemp.ok) {
                toast.error("registration failed");
                return;
            }


            toast.success("registration successful");

            // setTimeout(() => {
            //     window.location.href = "/login"
            // }, 1000)


        } catch (error) {
            toast.error("registration failed");
            return;
        }


    }

    return (
        <div className={"flex flex-col"}>


            <Dialog>
                <DialogTrigger>test</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>test the db connection and save data to db</DialogTitle>
                        <DialogDescription>
                          its a testing purpose to check the backend
                        </DialogDescription>

                        <form onSubmit={handleSubmit} className={"p-5 h-auto w-auto bg-black/40  flex flex-col justify-center items-center"}>
                            <input type={"text"} required={true} className={"p-2 bg-red-400 rounded-md  m-2 "} name={"name"} value={regForm.name} placeholder={"full_name"} onChange={(e) => {
                                setRegForm({...regForm, name: e.target.value})
                            }}/>

                            <input type={"text"} required={true} className={"p-2 bg-red-400 rounded-md  m-2"} name={"role"} value={regForm.role} placeholder={"role"} onChange={(e) => {
                                setRegForm({...regForm, role: e.target.value})
                            }}/>
                            <input type={"text"} name={"address"} required={true} className={"p-2 bg-red-400 rounded-md  m-2"} value={regForm.address} placeholder={"address"} onChange={(e) => {
                                setRegForm({...regForm, address: e.target.value})
                            }}/>
                            <input type={"text"} name={"phone"} value={regForm.phone} required={true} className={"p-2 bg-red-400 rounded-md  m-2"} placeholder={"phone"} onChange={(e) => {
                                setRegForm({...regForm, phone: e.target.value})
                            }}/>
                            <select className={"p-2 bg-red-400 rounded-md m-2 w-3/4"} name={"status"} value={regForm.status.toString()}
                            onChange={(e)=>{ const status= e.target.value==="true"
                            setRegForm({...regForm , status: status})
                            }}
                            >

                                <option value={"true"}>
                                    active
                                </option>

                                <option value={"false"}>
                                    inactive
                                </option>
                            </select>
                            <Button>submit </Button>
                        </form>

                    </DialogHeader>
                </DialogContent>
            </Dialog>



        </div>
    )
}
