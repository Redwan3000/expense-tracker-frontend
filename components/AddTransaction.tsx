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
        <div className={"bg-green-200 rounded-md flex justify-center"}><Dialog>
            <DialogTrigger className={"p-2 px-4"}>Add Transaction</DialogTrigger>
            <DialogContent className={"bg-[#DBD9BC]  p-4 w-1/2 flex flex-col justify-center rounded-xl"}>
                <DialogHeader>
                    <DialogTitle className={"flex justify-center mb-4"}>Add Transaction</DialogTitle>
                    <DialogDescription className={"p-3"}>

                        <form>
                            <div className={"flex "}>
                                <div className={" flex flex-col gap-2"}>
                                    <Input type={"number"} placeholder={"UserId"}/>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="light">Food</SelectItem>
                                                <SelectItem value="dark">Cloth</SelectItem>
                                                <SelectItem value="Util">Util</SelectItem>
                                                <SelectItem value="Medicine">Medicine</SelectItem>
                                                <SelectItem value="Travel">Travel</SelectItem>
                                                <SelectItem value="Shopping">Shopping</SelectItem>
                                                <SelectItem value="Others">Others</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Input type={"text"} placeholder={"Item"}/>
                                    <Input type={"text"} placeholder={"Description"}/>

                                    <Select>
                                        <SelectTrigger className="w-[180px]">
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
                                        <SelectTrigger className="w-[180px]">
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
                                    <SelectTrigger className="w-[180px]">
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
                                    <Input type={"number"} placeholder={"Amount"}/>
                                    <Input type={"date"} placeholder={"date"}/>

                                </div>

                                <div className={"flex items-center justify-center h-fit mx-4 bg-yellow-50 w-full"}>
                                    <Card className={"p-4"}>add recipt</Card>
                                </div>
                            </div>

                            <div className={"flex justify-center items-center mt-2 "}>
                                <button> Submit </button>
                            </div>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog></div>
    )
}
