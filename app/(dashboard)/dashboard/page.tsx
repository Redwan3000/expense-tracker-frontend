import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {AddTransaction} from "@/components/AddTransaction";

export default function Dashboard() {
    return (

        <main className={"h-full flex flex-col w-full"}>
           <div className={"flex justify-between"}>

<div>welcome user</div>

               <div><AddTransaction /></div>
           </div>

            <div className={"min-w-full w-full flex  justify-between"} >

                <Card className={"w-[25%] h-30 bg-[#DEDDCB] rounded-xl"}>
                    <CardHeader>
                        <CardTitle>Total Balance</CardTitle>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p></p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                <Card className={"w-1/5 h-30 bg-[#DEDDCB] rounded-xl"}>
                    <CardHeader>
                        <CardTitle>Income </CardTitle>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p></p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                <Card className={"w-1/5 h-30 bg-[#DEDDCB] rounded-xl"}>
                    <CardHeader>
                        <CardTitle>Expense </CardTitle>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p></p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                <Card className={"w-1/5 h-30 bg-[#DEDDCB] rounded-xl"}>
                    <CardHeader>
                        <CardTitle>Savings Ratio</CardTitle>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p></p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

            </div>
            <div className={"flex-1 h-full w-full bg-[#F2F2F2] rounded-xl"}>

            </div>
        </main>

    );
}
