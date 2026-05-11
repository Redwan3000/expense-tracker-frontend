import React from 'react'
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Card} from "@/components/ui/card";

export const AddTransaction = () => {
    return (
        <div className={"bg-green-200 rounded-md flex justify-center"}>
            <Dialog>
            <DialogTrigger className={"p-2 px-4"}>Add Transaction</DialogTrigger>
            <DialogContent className={"bg-[#DBD9BC]  size-auto flex  flex-col justify-center rounded-xl"}>
                <DialogHeader>
                    <DialogTitle className={"flex justify-center mb-4"}>Add Transaction</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>


                <form className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>

                    <div className={" flex flex-col gap-x-10 justify-center  rounded-md  py-6 mx-12bg-black"}>
                        <Input type={"number"}  placeholder={"UserId"}/>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="1">Food</SelectItem>
                                    <SelectItem value="2">Cloth</SelectItem>
                                    <SelectItem value="3">Util</SelectItem>
                                    <SelectItem value="4">Medicine</SelectItem>
                                    <SelectItem value="5">Travel</SelectItem>
                                    <SelectItem value="6">Shopping</SelectItem>
                                    <SelectItem value="7">Others</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input type={"text"} className={"w-full"} placeholder={"Item"}/>
                        <Input type={"text"} className={"w-full"} placeholder={"Description"}/>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Transaction Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="light">Expense</SelectItem>
                                    <SelectItem value="dark">Income</SelectItem>
                                    <SelectItem value="system">Transfer</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className={"w-full"}>
                                <SelectValue placeholder="Transaction Method" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="light">Bank</SelectItem>
                                    <SelectItem value="dark">MFS</SelectItem>
                                    <SelectItem value="system">Cash</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className={"w-full"}>
                                <SelectValue placeholder="Account" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="light">Account1</SelectItem>
                                    <SelectItem value="dark">Account2</SelectItem>
                                    <SelectItem value="system">Account3</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input type={"number"} className={"w-full"} placeholder={"Amount"}/>
                        <Input type={"date"} className={"w-full"} placeholder={"date"}/>
                    </div>



                    <div className={"flex flex-col items-center justify-center w-full  bg-yellow-50"}>
                        <Card className={"p-4"}>add recipt</Card>
                    </div>


                    <div className={"col-span-2 flex bg-purple-500 justify-center items-center mt-4"}>
                        <button className={"p-2"}> Submit </button>
                    </div>
                </form>


            </DialogContent>
        </Dialog></div>
    )
}
